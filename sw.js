/* Federwerk Service Worker – macht die App offline nutzbar.
   Beim Ändern der App-Dateien die CACHE-Version erhöhen, damit Nutzer die
   neue Fassung bekommen. */
const CACHE = "federwerk-v2";
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
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
