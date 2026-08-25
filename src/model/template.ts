import type { StudyPlanState } from "@/model/studyPlan";

export type TemplateJSON = {
  version: number;
  updatedAt: string;
  plan: StudyPlanState;
};