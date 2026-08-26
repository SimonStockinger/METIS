import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { initialState } from "@/controller/state/initialState";
import { SemesterGrid } from "@/view/components/SemesterGrid";
import StudyPlanBoardToolbar from "@/view/components/StudyPlanBoardToolbar";
import { CountModeToggle } from "@/view/components/assets/CountModeToggle";
import type { CountMode } from "@/view/components/assets/CountModeToggle";
import type { DragEndEvent } from "@dnd-kit/core";

type StudyPlanBoardProbs = {
    state: typeof initialState;
    dispatch: any;
};

function StudyPlanBoard({ state, dispatch }: StudyPlanBoardProbs) {
    const [countMode, setCountMode] = useState<CountMode>("planned");
    const [isSettingsOpen, setIsSettingsOpen] = useState(true);

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (!active.data.current || !over?.data.current) return;
        const { moduleId, from } = active.data.current as any;
        const to = over.data.current as any;
        dispatch({
            type: "MOVE_MODULE",
            moduleId,
            from,
            to,
        });
    };

    return (
        <div className="board">
            <div className="board-toolbar">
                <button
                    type="button"
                    className="toolbar-collapse-toggle"
                    onClick={() => setIsSettingsOpen((open) => !open)}
                    aria-expanded={isSettingsOpen}
                >
                    <span
                        className={
                            isSettingsOpen
                                ? "toolbar-collapse-arrow open"
                                : "toolbar-collapse-arrow"
                        }
                        aria-hidden="true"
                    >
                        ▸
                    </span>
                    Einstellungen
                </button>

                {isSettingsOpen && (
                    <div className="toolbar-panel">
                        <div className="toolbar-actions">
                            <StudyPlanBoardToolbar
                                state={state}
                                dispatch={dispatch}
                            />
                        </div>
                        <div className="toolbar-view-settings">
                            <span className="toolbar-view-settings-label">
                                Anzeige:
                            </span>
                            <CountModeToggle
                                mode={countMode}
                                onChange={setCountMode}
                            />
                        </div>
                    </div>
                )}
            </div>

            <DndContext onDragEnd={handleDragEnd}>
                <SemesterGrid
                    semesters={state.semesters}
                    modules={state.modules}
                    categories={state.categories}
                    dispatch={dispatch}
                    countMode={countMode}
                />
            </DndContext>
        </div>
    );
}

export default StudyPlanBoard;
