import type { StudyPlanState } from "../domain/studyPlan";

export const initialState: StudyPlanState = {
  categories: [
    "Theoretische Informatik",
    "Praktische Informatik",
    "Mathematik",
    "Technische Informatik",
    "Wahlbereich",
    "Ergänzungsfach",
    "Überfachliche Qualifikationen"
  ],

  semesters: [
    {
      id: "sem‑1",
      label: "Semester 1",
      order: 1,
      modulesByCategory: {
        "Theoretische Informatik": ["m‑gi"],
        "Mathematik": ["m‑la1", "m‑analysis1"],
        "Praktische Informatik": ["m‑prog"],
        "Technische Informatik": [],
        "Schlüssel‑/Überfachliche Qualifikationen": []
      }
    },
    {
      id: "sem‑2",
      label: "Semester 2",
      order: 2,
      modulesByCategory: {
        "Theoretische Informatik": ["m‑ti"],         
        "Mathematik": ["m‑la2"],
        "Praktische Informatik": ["m‑ds"],
        "Technische Informatik": [],
        "Schlüssel‑/Überfachliche Qualifikationen": []
      }
    }
  ],

  modules: {
    // Semester 1
    "m‑prog": {
      id: "m‑prog",
      name: "Programmieren",
      ects: 5, 
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m‑gi": {
      id: "m‑gi",
      name: "Grundbegriffe der Informatik",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Theoretische Informatik"
    },
    "m‑analysis1": {
      id: "m‑analysis1",
      name: "Analysis 1",
      ects: 9,
      type: "pflicht",
      prerequisites: [],
      category: "Mathematik"
    },
      "m‑la1": {
      id: "m‑la1",
      name: "Lineare Algebra 1",
      ects: 9,
      type: "pflicht",
      prerequisites: [],
      category: "Mathematik"
    },

    // Semester 2
    "m‑ds": {
      id: "m‑ds",
      name: "Algorithmen I",
      ects: 6,
      type: "pflicht",
      prerequisites: ["m‑prog"],
      category: "Theoretische Informatik"
    },
    "m‑la2": {
      id: "m‑la2",
      name: "Lineare Algebra 2",
      ects: 6,
      type: "pflicht",
      prerequisites: ["m‑analysis1"],
      category: "Mathematik"
    },
    "m‑ti": {
      id: "m‑ti",
      name: "Digitialtechnik",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Technische Informatik"
    }


    // Semester 3

    // Semester 4

    // Semester 5
  }
};
