import { useState } from "react";
import { initialState } from "@/controller/state/initialState";
import { Modal } from "@/view/components/forms/Modal";
import { AddModuleForm } from "@/view/components/forms/AddModuleForm";
import { AddCategoryForm } from "@/view/components/forms/AddCategoryForm";

type StudyPlanBoardToolbarProbs = {
    state: typeof initialState;
    dispatch: any;
};

type AddSemesterProps = {
    dispatch: any;
};

export function AddSemester({ dispatch }: AddSemesterProps) {
    return (
        <div className="toolbar-row">
            <button onClick={() => dispatch({ type: "ADD_SEMESTER" })}>
                Semester hinzufügen
            </button>
        </div>
    );
}

function StudyPlanBoardToolbar({
    state,
    dispatch,
}: StudyPlanBoardToolbarProbs) {
    const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
    const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

    return (
        <div className="toolbar-row">
            <button type="button" onClick={() => setIsAddModuleOpen(true)}>
                + Modul hinzufügen
            </button>
            <button type="button" onClick={() => setIsAddCategoryOpen(true)}>
                + Kategorie hinzufügen
            </button>

            <AddSemester dispatch={dispatch} />

            <Modal
                isOpen={isAddModuleOpen}
                onClose={() => setIsAddModuleOpen(false)}
                title="Neues Modul"
            >
                <AddModuleForm
                    state={state}
                    dispatch={dispatch}
                    onSuccess={() => setIsAddModuleOpen(false)}
                />
            </Modal>

            <Modal
                isOpen={isAddCategoryOpen}
                onClose={() => setIsAddCategoryOpen(false)}
                title="Neue Kategorie"
            >
                <AddCategoryForm
                    dispatch={dispatch}
                    onSuccess={() => setIsAddCategoryOpen(false)}
                />
            </Modal>
        </div>
    );
}

export default StudyPlanBoardToolbar;
