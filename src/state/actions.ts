import type { StudyPlanState } from "@/model/studyPlan";
import type { Module } from "@/model/module";

export type Action =
  | { type: "ADD_SEMESTER" }
  | { type: "ADD_CATEGORY"; category: string }
  | {
      type: "ADD_MODULE";
      module: Module;
      semesterId: string;
      category: string;
    }
  | {
      type: "MOVE_MODULE";
      moduleId: string;
      from: { semesterId: string; category: string };
      to: { semesterId: string; category: string };
    }
  | { type: "LOAD_STUDY_PLAN"; state: StudyPlanState };
