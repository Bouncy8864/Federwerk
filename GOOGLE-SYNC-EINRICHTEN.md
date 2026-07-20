# Geräteübergreifende Synchronisierung mit Google Drive einrichten

Federwerk kann deine Daten **automatisch in deinem eigenen Google-Konto**
sichern (in einem versteckten App-Ordner) und geräteübergreifend abgleichen –
Handy und PC zeigen denselben Stand. Es läuft alles direkt in der App, ohne
fremden Server.

Damit die App auf deinen Drive zugreifen darf, musst du **einmalig** eine
kostenlose „Zugangs-ID" (OAuth-Client-ID) in der Google-Cloud-Konsole erstellen.
Das dauert ~10–15 Minuten. Danach nie wieder.

> Nimm dafür dasselbe Google-Konto, das du auch für Gemini benutzt.

---

## Teil A – einmalig in der Google-Cloud-Konsole

Öffne **console.cloud.google.com** und melde dich an.

### 1. Projekt anlegen
Oben in der Projekt-Auswahl (neben „Google Cloud") auf **„Projekt auswählen" →
„Neues Projekt"**. Name z. B. `Federwerk` → **Erstellen**. Danach dieses Projekt
oben auswählen.

### 2. Google Drive API aktivieren
Oben in die Suchleiste **„Google Drive API"** eingeben, das Ergebnis öffnen und
auf **„Aktivieren"** klicken.

### 3. Zustimmungsbildschirm (OAuth consent screen)
Links im Menü **„APIs und Dienste" → „OAuth-Zustimmungsbildschirm"** (in neueren
Konsolen: **„Google Auth Platform"**).
- Nutzertyp **„Extern"** wählen → **Erstellen**.
- App-Name: `Federwerk`. Support-E-Mail und Entwickler-E-Mail: deine eigene
  Adresse. Den Rest überspringen (Speichern & Weiter).
- Beim Punkt **„Testnutzer"** deine eigene Google-Adresse **hinzufügen**
  (in neueren Konsolen: **„Zielgruppe" → Testnutzer hinzufügen**).
- Der Status bleibt auf **„Test"** – das ist für private Nutzung völlig in Ordnung.

### 4. Zugangs-ID (OAuth-Client-ID) erstellen
Links **„APIs und Dienste" → „Anmeldedaten"** → oben **„Anmeldedaten erstellen"
→ „OAuth-Client-ID"**.
- Anwendungstyp: **„Webanwendung"**.
- Name: z. B. `Federwerk Web`.
- Unter **„Autorisierte JavaScript-Quellen"** auf **„URI hinzufügen"** und exakt
  eintragen:

  ```
  https://bouncy8864.github.io
  ```

  (Genau so – ohne Schrägstrich am Ende, ohne weiteren Pfad. Das ist die Adresse
  deiner installierten App.)
- **Erstellen**. Es erscheint deine **Client-ID**, die auf
  `.apps.googleusercontent.com` endet. Kopiere sie.

---

## Teil B – in Federwerk verbinden

1. In Federwerk unten links auf **„☁ Sync"**.
2. Die kopierte **Client-ID** einfügen.
3. **„Mit Google verbinden"** antippen und dein Google-Konto wählen.
4. Es kommt ein Hinweis **„Google hat diese App nicht überprüft"** – das ist bei
   deiner eigenen, privaten App normal. Auf **„Erweitert"** und dann auf
   **„Weiter zu Federwerk (unsicher)"** tippen, danach den Zugriff auf den
   App-Ordner **erlauben**.
5. Fertig – ab jetzt wird automatisch synchronisiert. Der Button zeigt **„☁ Sync ✓"**.

---

## Auf einem zweiten Gerät

1. App wie gewohnt installieren/öffnen (dieselbe Adresse).
2. **„☁ Sync"** → **dieselbe Client-ID** einfügen → **„Mit Google verbinden"**
   (mit demselben Google-Konto).
3. Die App holt automatisch deinen aktuellen Stand aus der Cloud – **inklusive
   deiner Geschichten und deines API-Schlüssels**.

---

## Wie der Abgleich funktioniert

- **Beim Öffnen** holt die App die neueste Fassung aus der Cloud.
- **Beim Bearbeiten** lädt sie deine Änderungen kurz darauf automatisch hoch.
- **Bei Unterschieden gilt: die neueste Änderung gewinnt.** Bearbeite nach
  Möglichkeit nicht auf zwei Geräten gleichzeitig – wer zuletzt speichert,
  überschreibt den anderen Stand.
- Im „☁ Sync"-Fenster kannst du außerdem jederzeit **„Jetzt synchronisieren"**.

## Gut zu wissen
- **Kosten:** keine. Der Drive-App-Ordner und die Zugangs-ID sind kostenlos.
- **Datenschutz:** Die Daten liegen ausschließlich in **deinem** Google-Konto,
  in einem versteckten Ordner, den nur diese App sieht.
- **Anmeldung läuft ab:** Google-Zugänge gelten nur ~1 Stunde. Die App erneuert
  das meist unbemerkt. Steht mal „bitte neu verbinden", einfach „☁ Sync" öffnen
  und erneut verbinden.
- **Sicherheit:** Da auch dein API-Schlüssel mitsynchronisiert wird, richte den
  Sync nur auf deinen eigenen Geräten ein.
- Ein manuelles **„Sichern"** als Datei geht weiterhin – als zusätzliche
  Absicherung nie verkehrt.
