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
      id: "sem-1",
      label: "Semester 1",
      order: 1,
      modulesByCategory: {
        "Theoretische Informatik": ["m-gi"],
        "Praktische Informatik": ["m-prog"],
        "Mathematik": ["m-la1", "m-analysis1"],
        "Technische Informatik": [],
        "Überfachliche Qualifikationen": []
      }
    },
    {
      id: "sem-2",
      label: "Semester 2",
      order: 2,
      modulesByCategory: {
        "Theoretische Informatik": ["m-algo1"],
        "Praktische Informatik": ["m-st1"],
        "Mathematik": ["m-la2", "m-analysis2"],
        "Technische Informatik": ["m-dt"],
        "Überfachliche Qualifikationen": []
      }
    },
    {
      id: "sem-3",
      label: "Semester 3",
      order: 3,
      modulesByCategory: {
        "Theoretische Informatik": ["m-tgi"],
        "Praktische Informatik": ["m-pse", "m-bs"],
        "Mathematik": ["m-ws"],
        "Technische Informatik": ["m-ro"],
        "Überfachliche Qualifikationen": []
      }
    },
    {
      id: "sem-4",
      label: "Semester 4",
      order: 4,
      modulesByCategory: {
        "Theoretische Informatik": [],
        "Praktische Informatik": ["m-kd", "m-sec"],
        "Mathematik": ["m-num"],
        "Technische Informatik": [],
        "Überfachliche Qualifikationen": []
      }
    },
    {
      id: "sem-5",
      label: "Semester 5",
      order: 5,
      modulesByCategory: {
        "Theoretische Informatik": [],
        "Praktische Informatik": ["m-pp", "m-ai"],
        "Mathematik": [],
        "Technische Informatik": [],
        "Überfachliche Qualifikationen": []
      }
    },
    {
      id: "sem-6",
      label: "Semester 6",
      order: 6,
      modulesByCategory: {
        "Theoretische Informatik": [],
        "Praktische Informatik": ["m-bachelor"],
        "Mathematik": [],
        "Technische Informatik": [],
        "Überfachliche Qualifikationen": []
      }
    }
  ],

  modules: {
    // Semester 1
    "m-prog": {
      id: "m-prog",
      name: "Programmieren",
      ects: 5,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m-gi": {
      id: "m-gi",
      name: "Grundbegriffe der Informatik",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Theoretische Informatik"
    },
    "m-analysis1": {
      id: "m-analysis1",
      name: "Analysis I",
      ects: 9,
      type: "pflicht",
      prerequisites: [],
      category: "Mathematik"
    },
    "m-la1": {
      id: "m-la1",
      name: "Lineare Algebra I",
      ects: 9,
      type: "pflicht",
      prerequisites: [],
      category: "Mathematik"
    },

    // Semester 2
    "m-algo1": {
      id: "m-algo1",
      name: "Algorithmen I",
      ects: 6,
      type: "pflicht",
      prerequisites: ["m-prog"],
      category: "Theoretische Informatik"
    },
    "m-st1": {
      id: "m-st1",
      name: "Softwaretechnik I",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m-analysis2": {
      id: "m-analysis2",
      name: "Analysis II",
      ects: 6,
      type: "pflicht",
      prerequisites: ["m-analysis1"],
      category: "Mathematik"
    },
    "m-la2": {
      id: "m-la2",
      name: "Lineare Algebra II",
      ects: 5,
      type: "pflicht",
      prerequisites: ["m-la1"],
      category: "Mathematik"
    },
    "m-dt": {
      id: "m-dt",
      name: "Digitaltechnik & Entwurfsverfahren",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Technische Informatik"
    },

    // Semester 3
    "m-tgi": {
      id: "m-tgi",
      name: "Theoretische Grundlagen der Informatik",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Theoretische Informatik"
    },
    "m-pse": {
      id: "m-pse",
      name: "Praxis der Softwareentwicklung",
      ects: 7,
      type: "pflicht",
      prerequisites: ["m-st1"],
      category: "Praktische Informatik"
    },
    "m-bs": {
      id: "m-bs",
      name: "Betriebssysteme",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m-ws": {
      id: "m-ws",
      name: "Wahrscheinlichkeitstheorie & Statistik",
      ects: 4.5,
      type: "pflicht",
      prerequisites: [],
      category: "Mathematik"
    },
    "m-ro": {
      id: "m-ro",
      name: "Rechnerorganisation",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Technische Informatik"
    },

    // Semester 4
    "m-kd": {
      id: "m-kd",
      name: "Kommunikation & Datenhaltung",
      ects: 8,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m-sec": {
      id: "m-sec",
      name: "Informationssicherheit",
      ects: 5,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m-num": {
      id: "m-num",
      name: "Numerische Mathematik",
      ects: 4.5,
      type: "pflicht",
      prerequisites: [],
      category: "Mathematik"
    },

    // Semester 5
    "m-pp": {
      id: "m-pp",
      name: "Programmierparadigmen",
      ects: 6,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },
    "m-ai": {
      id: "m-ai",
      name: "Grundlagen der Künstlichen Intelligenz",
      ects: 5,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    },

    // Semester 6
    "m-bachelor": {
      id: "m-bachelor",
      name: "Bachelorarbeit",
      ects: 15,
      type: "pflicht",
      prerequisites: [],
      category: "Praktische Informatik"
    }
  }
};
