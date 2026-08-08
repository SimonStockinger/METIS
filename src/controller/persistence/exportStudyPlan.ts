import type { StudyPlanState } from "@/model/studyPlan";

const JSON_VERSION = 1;


function exportStudyPlan(state: StudyPlanState) {
  const payload = {
    version: JSON_VERSION,
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

export default exportStudyPlan;