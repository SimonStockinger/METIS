import exportStudyPlan from "@/controller/persistence/exportStudyPlan";
import { importStudyPlan } from "@/controller/persistence/importStudyPlan";
import { useReducer } from "react";
import { studyPlanReducer } from "@/controller/state/reducer";
import initialState from "@/controller/state/initialState";


function StudyPlanTopToolbar() {
    const [state, dispatch] = useReducer(studyPlanReducer, initialState);
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
      try {
        const plan = await importStudyPlan(file);
        dispatch({ type: "LOAD_STUDY_PLAN", state: plan });
      } catch (err) {
        alert(err);
      }
      e.target.value = "";
    };

    return(
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        <input type="file" accept="application/json" onChange={handleFileChange} />
        <button onClick={() => exportStudyPlan(state)}>Plan als JSON speichern</button>
    </div>
    );
};

export default StudyPlanTopToolbar;