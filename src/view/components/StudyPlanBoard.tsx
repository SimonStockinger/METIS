import { DndContext } from "@dnd-kit/core";
import { initialState } from "@/controller/state/initialState";
import { SemesterGrid } from "@/view/components/SemesterGrid";
import type { DragEndEvent } from "@dnd-kit/core";

type StudyPlanBoardProbs = {
  state: typeof initialState;
  dispatch: any;
};

function StudyPlanBoard({state, dispatch}: StudyPlanBoardProbs) {
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!active.data.current || !over?.data.current) return;
    const { moduleId, from } = active.data.current as any;
    const to = over.data.current as any;

    dispatch({
      type: "MOVE_MODULE",
      moduleId,
      from,
      to
    });
  };

    return(
        <div className="board">
            <DndContext onDragEnd={handleDragEnd}>
            <SemesterGrid
            semesters={state.semesters}
            modules={state.modules}
            categories={state.categories}
            />
            </DndContext>
      </div>
    );
};

export default StudyPlanBoard;