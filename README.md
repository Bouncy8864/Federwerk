# Federwerk – dein Autoren-Werkzeug

Ein einfaches Werkzeug, um aus Ideen Geschichten zu entwickeln und deine Welt zu
verwalten. Orientiert an bekannten Autorenprogrammen (Szenen-Karteikasten,
Figuren- und Ortsdatenbank) – aber bewusst schlank für den Einstieg.

## Loslegen

Öffne einfach die Datei **`index.html`** mit einem Doppelklick in deinem Browser
(Chrome, Firefox, Edge, Safari). Es wird **nichts installiert** und **nichts ins
Internet geschickt** – alles läuft nur bei dir.

## Was kann das Tool?

- **Übersicht** – Titel, Logline, Prämisse, Genre und dein Fortschritt auf einen Blick.
- **Manuskript** – Schreibe in Kapiteln und Szenen (wie ein Karteikasten). Jede
  Szene hat eine Kurzzusammenfassung, einen Status (Idee / Entwurf / Fertig), eine
  Perspektivfigur (POV) und ein Feld „Wann?" für die Handlungszeit.
  Kapitel und Szenen lassen sich per **Drag & Drop** (am Griff ⠿) umsortieren –
  auch quer über Kapitel hinweg.
- **Zeitstrahl** – Zeigt den Verlauf deiner Handlung in Leserichtung: was wann
  passiert, wer dabei ist und wie weit du bist. Ein Klick springt zur Szene.
- **Figuren, Orte, Weltelemente** – Karteikarten mit hilfreichen Feldern
  (Ziel, Konflikt, Wandlung …), die dir beim Denken helfen.
- **Automatische Verknüpfung** – Schreibst du im Szenentext den Namen einer Figur
  oder eines Ortes, erkennt Federwerk das automatisch. Auf jeder Karteikarte siehst
  du dann, in welchen Szenen die Figur/der Ort vorkommt. (Tipp: Spitznamen im Feld
  „Weitere Namen" eintragen, dann werden auch die erkannt.)
- **Beziehungen** – Verbinde Figuren/Orte miteinander und sieh das Geflecht als
  Diagramm. Ausgebaut mit:
  - **Kategorien mit Farben** (Familie, Liebe, Freundschaft, Konflikt, Bündnis,
    Ort, Sonstiges) – farbige Linien mit Pfeilrichtung und Legende.
  - **Gegen-Bezeichnung**: „Mutter von" erscheint auf der anderen Karte als
    „Kind von".
  - **Interaktiv**: Klick auf eine Figur im Diagramm hebt ihr Geflecht hervor,
    ein zweiter Klick öffnet ihre Karteikarte.
  - **Automatische Vorschläge**: Figuren, die oft zusammen in Szenen auftauchen,
    aber noch nicht verbunden sind, werden vorgeschlagen.
  - **Gewichtung**: Bindungsstärke (lose / mittel / eng → Liniendicke) und
    Tonalität (harmonisch 💚 / neutral / konfliktreich ⚡, konfliktreiche Linien
    gestrichelt).
  - **Entwicklung über die Handlung**: Halte Wendepunkte pro Kapitel fest
    (neue Stärke, Tonalität, Bezeichnung) und optional, ab wann eine Beziehung
    besteht. Der Regler **„Stand der Handlung"** zeigt das Geflecht so, wie es bis
    zu einem gewählten Kapitel aussieht.
  - **Frei anordnen**: Figuren im Diagramm lassen sich mit der Maus verschieben;
    die Anordnung wird gespeichert („Anordnung zurücksetzen" stellt den Kreis
    wieder her).
- **Volltextsuche** – Das Suchfeld links durchsucht Szenen, Figuren, Orte,
  Elemente, Ideen und Notizen; ein Klick springt zum Treffer.
- **Tagesziel** – Optionales Wort-Tagesziel mit Fortschrittsring auf der
  Übersicht (z. B. 300 Wörter/Tag).
- **Handlungsstränge** – Benannte, farbige Erzähllinien (z. B. „Haupthandlung",
  „Liebesgeschichte"). Szenen lassen sich einem Strang zuordnen; im Zeitstrahl
  kannst du nach Strang filtern, im Manuskript zeigt ein farbiger Balken den Strang.
- **Ideen & Struktur** – Ein Ideenspeicher plus Leitfragen, die dir helfen, aus
  einem Einfall eine Geschichte zu machen, und eine einfache Struktur in 7 Schritten.
- **Schreiben lernen** – Ein Einsteiger-Bereich fürs Handwerk: Mini-Lektionen mit
  kleinen Übungen (Szene, Figuren-Wünsche, Zeigen statt Behaupten, Dialog,
  Perspektive, roter Faden, Überarbeiten …) mit Fortschrittsanzeige, wechselnde
  Schreibimpulse und ein geführter **Story-Starter**, der dich in vier Schritten
  von der Idee zu Logline, Prämisse, erster Figur und erster Szene bringt.
- **KI-Assistent (optional)** – Ein Schreib-Coach direkt im Tool. Mit deinem
  eigenen Claude-API-Schlüssel (von console.anthropic.com) kennt er deine aktuelle
  Szene, Figuren und Prämisse und hilft dir mit Fragen, Ideen und Feedback.
  Der Schlüssel wird nur lokal in deinem Browser gespeichert; jede Anfrage läuft
  über deinen Anthropic-Account. Ohne Schlüssel funktioniert der Rest des Tools
  vollständig und kostenlos weiter.
- **Notizen** – ein freier Zettelkasten.
- **Manuskript-Export** – Über „⤓ Export" im Manuskript verwandelst du deine
  Szenen in ein durchgehendes, lesbares Dokument: als druckfertige Vorschau
  (auch „als PDF speichern"), als HTML- oder als reine Textdatei. Szenen kannst
  du dabei mit ihren Titeln oder mit „* * *" trennen.

## Wichtig: Speichern & Sichern

Deine Arbeit wird automatisch im Browser gespeichert (localStorage). Damit nichts
verloren geht (z. B. wenn du den Browser-Cache leerst oder den Rechner wechselst):

- **„Sichern"** exportiert dein Projekt als `.json`-Datei zum Aufheben.
- **„Laden"** liest so eine Datei wieder ein.

Du kannst mehrere Projekte anlegen und oben links umschalten. Mit „◐ Thema"
wechselst du zwischen hellem und dunklem Design.
