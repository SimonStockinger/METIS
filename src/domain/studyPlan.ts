import type { Semester } from "./semester";
import type { Module } from "./module";

export type StudyPlanState = {
  semesters: Semester[];
  categories: string[];
  modules: Record<string, Module>;
};