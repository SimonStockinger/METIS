# METIS
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> (/ˈmiːtɪs/; Ancient Greek: Μῆτις, romanized: Mêtis; Modern Greek: Μήτις, meaning 'Wisdom', 'Skill', or 'Craft'), in ancient Greek religion and mythology, was the pre-Olympian goddess of wisdom, counsel and deep thought, and a member of the Oceanids.[1] She is notable for being the advisor and first wife of Zeus, the king of the gods. She first helped him to free his siblings from their father Cronus's stomach and later helped their daughter Athena to escape from the forehead of Zeus, who swallowed both mother and child after it was foretold that she would bear a son mightier than his father.
> 
> Source: https://en.wikipedia.org/wiki/Metis_(mythology)

---

Ein interaktiver Study Planner für Informatik-Studierende.  
Die Anwendung ermöglicht die Planung von Studienmodulen über mehrere Semester hinweg, unterstützt Drag & Drop und berechnet automatisch die ECTS-Punkte pro Semester und insgesamt.  


**Author:** [Simon Stockinger](https://github.com/SimonStockinger/)

---

## Contents
- [Overview](#Overview)
- [Features](#features)
- [Installation](#Installation)
- [Usage](#usage)
- [Releases](#releases)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Overview


## Features
### Topic

| Feature | Description |
|---------|-------------| 
| Add Modules| ... |
| Move Modules | |
| Remove Modules | |
| Add Categorys | |
| Load Template | |
| Export Study-Plan | |
| Import Study-Plan | |
| Calculate Credits per Semester | |
| Calculate Credits total | |


## Installation
**Prerequisites:**

### Package Managers

:

## Usage 


### Supported Devices
<details>
<summary><strong>PC Web</strong></summary>

| Key | Action |
|-----|--------|
| `j` / `k` or `↓` / `↑` | Move down/up |
| `g` / `G` or `Home` / `End` | Jump to top/bottom |
| `p` | Jump to parent heading |
| `d` / `u` or `PageDown` / `PageUp` | Page down/up |
| `Tab` | Switch focus between outline and content |
| `1`-`9` | Jump to heading by number |

</details>

## Releases
### Pre-built Binaries
Download from the [releases page](https://github.com/SimonStockinger/<REPOSITORY>/releases):
See [CHANGELOG]() for the major changes in each release.

| Platform | Binary |
|----------|--------|
| Linux x86_64 | `<release>` |
| Linux ARM64 | `<release>` |
| macOS x86_64 | `<release>` |
| macOS ARM64 (Apple Silicon) | `<release>` |
| Windows x86_64 | `<release>` |

**macOS binaries** are signed with Developer ID and notarized by Apple.

### Building from Source

```bash
pnpm run dev  
```
```bash
pnpm buil 
```

Artifacts are output to `target/release-artifacts/`.

## Documentation
### Repository Structure
### Architecture

The Application uses the View-Model-Controller architecture.

#### View 

#### Controller 

##### persitence
 Buisiness logic for import and export of json files.

**JSON Format**
```json 
{
  "version": 2,
  "updatedAt": <yyyy-mm-ddThh:mm::ss>,
  "plan": {
    "categories": [
      {
        "name": <category-name>,
        "credits": <"amount">
      },
    ],
    "semesters": [
      {
        "id": "sem-<NR>",
        "label": "Semester 1",
        "order": 1,
        "modulesByCategory": {
          "Theoretische Informatik": [
            "m-gi"
          ],
          "Praktische Informatik": [
            "m-prog"
          ],
          "Mathematik": [
            "Höhere Mathematik I-sem-1-Mathematik-1770995194531",
            "Lineare Algebra f. Informatik I-sem-1-Mathematik-1770995275000"
          ],
          "Technische Informatik": [],
          "Überfachliche Qualifikationen": []
        }
      },
      {
      "m-prog": {
        "id": "m-prog",
        "name": "Programmieren",
        "ects": 5,
        "category": "Praktische Informatik"
      },
      "m-gi": {
        "id": "m-gi",
        "name": "Grundbegriffe der Informatik",
        "ects": 6,
        "category": "Theoretische Informatik"
      }
    }
  }
}
```




##### state
#### Model 
##### category.ts
```ts 
export type Category = {
  name: string;
  credits: string;
};
```

##### module.ts

##### semester.ts 

##### module.ts




## Roadmap
**Completed**
- [x] Draggable Modules
- [x] 

**Planned**
- [ ] Visul information about module state (passed/planned)
- [ ] Visul Exports (PDF/JPEG/PNG/PDF)
- [ ] Editable Exports (xls)


## Contributing
### Contact

## Acknowledgements
[![Built With React]()

## License
Copyright (c) Simon Stockinger. See [MIT-LICENSE.txt](LICENSE) for details.

