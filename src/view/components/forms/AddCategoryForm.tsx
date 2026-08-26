import { useState } from "react";
import type { FormEvent } from "react";

type Props = {
    dispatch: any;
    onSuccess?: () => void;
};

export function AddCategoryForm({ dispatch, onSuccess }: Props) {
    const [categoryName, setCategoryName] = useState("");
    const [categoryCredits, setCategoryCredits] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const trimmedName = categoryName.trim();
        const trimmedCredits = categoryCredits.trim();
        const creditsValue = Number(trimmedCredits);

        if (!trimmedName) {
            setError("Bitte einen Kategorienamen eingeben.");
            return;
        }
        if (
            !trimmedCredits ||
            !Number.isFinite(creditsValue) ||
            creditsValue <= 0
        ) {
            setError("Bitte eine gültige Anzahl an Credits eingeben.");
            return;
        }

        dispatch({
            type: "ADD_CATEGORY",
            category: {
                name: trimmedName,
                credits: trimmedCredits,
                currCreddits: "0",
            },
        });

        setCategoryName("");
        setCategoryCredits("");
        setError(null);
        onSuccess?.();
    };

    return (
        <form className="add-category-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}

            <label className="form-field">
                <span>Kategoriename</span>
                <input
                    type="text"
                    placeholder="z. B. Pflichtmodule"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
            </label>

            <label className="form-field">
                <span>Credits (LP)</span>
                <input
                    type="number"
                    min={0}
                    step={1}
                    placeholder="z. B. 30"
                    value={categoryCredits}
                    onChange={(e) => setCategoryCredits(e.target.value)}
                />
            </label>

            <button type="submit">Kategorie hinzufügen</button>
        </form>
    );
}
