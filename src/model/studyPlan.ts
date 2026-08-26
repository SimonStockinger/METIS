import type { Semester } from "./semester";
import type { Module } from "./module";
import type { Category } from "./category";

export type StudyPlanState = {
  semesters: Semester[];
  categories: Category[];
  modules: Record<string, Module>;
};