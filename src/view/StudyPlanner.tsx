import StudyPlanTopToolbar from "@/view/components/StudyPlanTopToolbar";
import StudyPlanBoardToolbar from "@/view/components/StudyPlanBoardToolbar";
import StudyPlanBoard from "@/view/components/StudyPlanBoard";
import { useReducer } from "react";
import { studyPlanReducer } from "@/controller/state/reducer";
import { initialState } from "@/controller/state/initialState";

function StudyPlanner() {
  const [state, dispatch] = useReducer(studyPlanReducer, initialState);

  return(
    <div className="study-planner">
      <StudyPlanTopToolbar state={state} dispatch={dispatch} />
      <hr></hr>
      <StudyPlanBoardToolbar state={state} dispatch={dispatch} />
      <StudyPlanBoard state={state} dispatch={dispatch} />
    </div>
  );
};

export default StudyPlanner;