import StudyPlanTopToolbar from "@/view/components/StudyPlanTopToolbar";
import StudyPlanBoardToolbar from "@/view/components/StudyPlanBoardToolbar";
import StudyPlanBoard from "@/view/components/StudyPlanBoard";

function StudyPlanner() {
  return(
    <div className="study-planner">
      <StudyPlanTopToolbar />
      <hr></hr>
      <StudyPlanBoardToolbar />
      <div className="board-wrapper"> 
          <StudyPlanBoard />
      </div>
    </div>
  );
};

export default StudyPlanner;