import { useState } from "react";
import type { FormEvent } from "react";
import { initialState } from "@/controller/state/initialState";

type Props = {
    state: typeof initialState;
    dispatch: any;
    onSuccess?: () => void;
};

export function AddModuleForm({ state, dispatch, onSuccess }: Props) {
    const [moduleName, setModuleName] = useState("");
    const [moduleECTS, setModuleECTS] = useState<number>(0);
    const [selectedSemesterId, setSelectedSemesterId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!moduleName.trim()) {
            setError("Bitte einen Modulnamen eingeben.");
            return;
        }
        if (!Number.isFinite(moduleECTS) || moduleECTS <= 0) {
            setError("Bitte eine gültige ECTS-Zahl eingeben.");
            return;
        }
        if (!selectedSemesterId || !selectedCategory) {
            setError("Bitte Semester und Kategorie auswählen.");
            return;
        }

        dispatch({
            type: "ADD_MODULE",
            module: {
                id: crypto.randomUUID(),
                name: moduleName.trim(),
                ects: moduleECTS,
                category: selectedCategory,
                passed: false,
            },
            semesterId: selectedSemesterId,
            category: selectedCategory,
        });

        setModuleName("");
        setModuleECTS(0);
        setSelectedSemesterId("");
        setSelectedCategory("");
        setError(null);
        onSuccess?.();
    };

    return (
        <form className="add-module-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}

            <label className="form-field">
                <span>Modulname</span>
                <input
                    type="text"
                    placeholder="Modul Name"
                    value={moduleName}
                    onChange={(e) => setModuleName(e.target.value)}
                />
            </label>

            <label className="form-field">
                <span>ECTS</span>
                <input
                    type="number"
                    placeholder="ECTS"
                    value={moduleECTS}
                    onChange={(e) => setModuleECTS(Number(e.target.value))}
                />
            </label>

            <label className="form-field">
                <span>Semester</span>
                <select
                    value={selectedSemesterId}
                    onChange={(e) => setSelectedSemesterId(e.target.value)}
                >
                    <option value="">Semester wählen</option>
                    {state.semesters.map((sem) => (
                        <option key={sem.id} value={sem.id}>
                            {sem.label}
                        </option>
                    ))}
                </select>
            </label>

            <label className="form-field">
                <span>Kategorie</span>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Kategorie wählen</option>
                    {state.categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit">Modul hinzufügen</button>
        </form>
    );
}
