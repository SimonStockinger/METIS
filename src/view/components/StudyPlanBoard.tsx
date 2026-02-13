import { useReducer, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { studyPlanReducer } from "@/controller/state/reducer";
import { initialState } from "@/controller/state/initialState";
import { SemesterGrid } from "@/view/components/SemesterGrid";

function StudyPlanBoard() {
  const [state, dispatch] = useReducer(studyPlanReducer, initialState);

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
        <div>
            <DndContext onDragEnd={handleDragEnd}>
            <SemesterGrid
            semesters={state.semesters}
            modules={state.modules}
            categories={state.categories}
            />
            </DndContext>
      </div>
    );
}

export default StudyPlanBoard;