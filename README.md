# Study Planner

Ein interaktiver Study Planner für Informatik-Studierende.  
Die Anwendung ermöglicht die Planung von Studienmodulen über mehrere Semester hinweg, unterstützt Drag & Drop und berechnet automatisch die ECTS-Punkte pro Semester und insgesamt.  

---

## Features

- **Dynamisches Grid-Layout:** Semester als Zeilen, Kategorien/Fächer als Spalten
- **Drag & Drop:** Module zwischen Semestern und Kategorien verschieben
- **Modulverwaltung:**
  - Name, ECTS, Typ (Pflicht, Wahl, Projekt, Thesis)
  - Kategorie (z.B. Theoretische Informatik, Mathematik)
- **Semesterverwaltung:** Semester hinzufügen oder entfernen
- **Kategorien dynamisch hinzufügen**
- **ECTS-Berechnung:** pro Semester und kumulativ
- **Persistenz:**
  - Studienplan als JSON exportieren
  - JSON-Datei importieren
- **Responsive Layout** und flexible Skalierung

---

## Installation

Voraussetzungen: **Node.js**, **pnpm**

1. Repository klonen:

```bash
git clone >
cd study-planner
```
Abhängigkeiten installieren:
```bash
pnpm install
```
Entwicklungsserver starten:
```bash
pnpm run dev
```

Anwendung im Browser öffnen:
```bash
http://localhost:5173
```

Projektstruktur
```
src/
├── components/        # React-Komponenten (StudyPlanner, SemesterGrid, ModuleCard, etc.)
├── domain/            # Typdefinitionen für Module, Semester, StudyPlan
├── state/             # Reducer und InitialState
├── persistence/       # Funktionen zum Import/Export von JSON
├── styles/            # CSS-Dateien für Layout und Grid
└── App.tsx            # Einstiegspunkt der Anwendung
```
Typen

Module:
```
type Module = {
  id: string;
  name: string;
  ects: number;
  type: "pflicht" | "wahl" | "projekt" | "thesis";
  prerequisites: string[];
  category: string;
};
```
Semester:
```
type Semester = {
  id: string;
  label: string;
  order: number;
  modulesByCategory: Record<string, string[]>; // Kategorie -> Modul-IDs
};
```
Drag & Drop

Die Anwendung verwendet @dnd-kit/core
für Drag & Drop.
Module können zwischen Kategorien und Semestern verschoben werden.
Positionen und ECTS-Zählung werden automatisch aktualisiert.

JSON-Import / Export
    Export: Speichert den aktuellen Studienplan als study-plan.json.
    Import: Lädt einen zuvor exportierten Plan, inklusive Module, Semester und Kategorien.

Zukünftige Erweiterungen

    ECTS-Ziel pro Semester und Gesamtziel einstellbar

    Modul-Abhängigkeiten berücksichtigen (Prerequisites)

    Filtern und Sortieren von Modulen nach Typ oder Kategorie

    Drag & Drop auf mobilen Geräten optimieren

    UI-Styling verbessern (z.B. Farben für Pflicht/Wahl/Projekt/Thesis)

Lizenz

MIT License
