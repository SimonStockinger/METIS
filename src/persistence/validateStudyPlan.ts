import type { StudyPlanState } from "../domain/studyPlan";

export function isValidStudyPlanDocument(
  data: any
): data is {
  version: 1;
  updatedAt: string;
  plan: StudyPlanState;
} {
  return (
    data &&
    data.version === 1 &&
    typeof data.updatedAt === "string" &&
    typeof data.plan === "object" &&
    Array.isArray(data.plan.semesters) &&
    typeof data.plan.modules === "object"
  );
}
