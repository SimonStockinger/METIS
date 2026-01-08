import type { StudyPlanState } from "../domain/studyPlan";

export async function importStudyPlan(file: File): Promise<StudyPlanState> {
  const text = await file.text();
  const data = JSON.parse(text);

  if (!data.plan) {
    throw new Error("Ungültige Study-Plan-Datei");
  }

  return data.plan as StudyPlanState;
}
