import StudyPlanTopToolbar from "@/view/components/StudyPlanTopToolbar";
import StudyPlanBoardToolbar from "@/view/components/StudyPlanBoardToolbar";
import StudyPlanBoard from "@/view/components/StudyPlanBoard";

function StudyPlanner() {
  return(
    <div>
      <StudyPlanTopToolbar />
      <hr></hr>
      <StudyPlanBoardToolbar />
      <StudyPlanBoard />
    </div>
  );
};

export default StudyPlanner;