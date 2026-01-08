import type { StudyPlanState } from "../domain/studyPlan";

export function exportStudyPlan(state: StudyPlanState) {
  const payload = {
    version: 1,
    updatedAt: new Date().toISOString(),
    plan: state
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "study-plan.json";
  a.click();

  URL.revokeObjectURL(url);
}
