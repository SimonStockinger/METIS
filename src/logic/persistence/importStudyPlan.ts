import type { StudyPlanState } from "@/model/studyPlan";

export async function importStudyPlan(file: File): Promise<StudyPlanState> {
  const text = await file.text();
  const data = JSON.parse(text);

  if (!data.plan) {
    throw new Error("Ungültige Studienplan Datei");
  }

  return data.plan as StudyPlanState;
}
