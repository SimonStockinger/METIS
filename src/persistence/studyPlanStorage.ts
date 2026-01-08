import type { StudyPlanState } from "../domain/studyPlan";

const STORAGE_KEY = "study-plan";

type StudyPlanDocument = {
  version: 1;
  updatedAt: string;
  plan: StudyPlanState;
};

export function saveStudyPlan(plan: StudyPlanState) {
  const document: StudyPlanDocument = {
    version: 1,
    updatedAt: new Date().toISOString(),
    plan
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(document));
}

export function loadStudyPlan(): StudyPlanState | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as StudyPlanDocument;

    if (parsed.version !== 1) {
      console.warn("Unsupported study plan version");
      return null;
    }

    return parsed.plan;
  } catch {
    return null;
  }
}
