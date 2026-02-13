import type { StudyPlanState } from "@/model/studyPlan";
import type { Module } from "@/model/module";
import type { Category } from "@/model/category";

export type Action =
  | { type: "ADD_SEMESTER" }
  | { type: "REMOVE_SEMESTER"; semesterId: string }
  | { type: "ADD_CATEGORY"; category: Category }
  | { type: "REMOVE_CATEGORY"; category: string }
  | {
      type: "ADD_MODULE";
      module: Module;
      semesterId: string;
      category: string;
    }
  | { type: "REMOVE_MODULE"; moduleId: string }
  | {
      type: "MOVE_MODULE";
      moduleId: string;
      from: { semesterId: string; category: string };
      to: { semesterId: string; category: string };
    }
  | { type: "LOAD_STUDY_PLAN"; state: StudyPlanState };
