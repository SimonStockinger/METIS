import { useState } from "react";
import exportStudyPlan from "@/controller/persistence/exportStudyPlan";
import { initialState } from "@/controller/state/initialState";
import { Modal } from "@/view/components/forms/Modal";
import { LoadPlanForm } from "@/view/components/forms/LoadPlanForm";

type StudyPlanTopToolbarProbs = {
    state: typeof initialState;
    dispatch: any;
};

function StudyPlanTopToolbar({ state, dispatch }: StudyPlanTopToolbarProbs) {
    const [isLoadOpen, setIsLoadOpen] = useState(false);

    return (
        <div className="top-toolbar">
            <div className="toolbar-row">
                <button type="button" onClick={() => setIsLoadOpen(true)}>
                    Plan Laden
                </button>
                <button onClick={() => exportStudyPlan(state)}>
                    Plan speichern
                </button>
            </div>

            <Modal
                isOpen={isLoadOpen}
                onClose={() => setIsLoadOpen(false)}
                title="Studienplan laden"
            >
                <LoadPlanForm
                    dispatch={dispatch}
                    onSuccess={() => setIsLoadOpen(false)}
                />
            </Modal>
        </div>
    );
}

export default StudyPlanTopToolbar;
