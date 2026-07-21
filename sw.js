/* Federwerk Service Worker – macht die App offline nutzbar.
   Beim Ändern der App-Dateien die CACHE-Version erhöhen, damit Nutzer die
   neue Fassung bekommen. */
const CACHE = "federwerk-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

// Beim Installieren die App-Dateien in den Cache legen.
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

// Alte Caches aufräumen.
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Netzwerk zuerst versuchen (damit Updates ankommen), sonst aus dem Cache.
// So funktioniert die App auch komplett offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // Nur eigene App-Dateien behandeln. Fremd-Aufrufe (Google-Anmeldung,
  // Drive-API, Gemini/Claude) unangetastet ans Netz durchlassen.
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    // "follow" holt bei einer Weiterleitung (z. B. nach Repo-Umbenennung)
    // wirklich das Ziel. Ist die Antwort weitergeleitet, bauen wir eine
    // saubere, nicht-weitergeleitete Antwort nach – sonst lehnt der Browser
    // sie bei einer Seiten-Navigation ab und die App bliebe auf dem alten
    // Cache hängen.
    fetch(e.request, { redirect: "follow" })
      .then(async (res) => {
        const out = res.redirected ? new Response(res.body, {
          status: res.status, statusText: res.statusText, headers: res.headers
        }) : res;
        try { const copy = out.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {}); } catch (_) {}
        return out;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
