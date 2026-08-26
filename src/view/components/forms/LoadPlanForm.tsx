import { useState } from "react";
import { importStudyPlan } from "@/controller/persistence/importStudyPlan";
import type { TemplateJSON } from "@/model/template";

const templateModules = import.meta.glob("@/assets/templates/*.json", {
    eager: true,
    import: "default",
});

const templateEntries: { name: string; content: TemplateJSON }[] =
    Object.entries(templateModules).map(([path, content]) => {
        const name = path.split("/").pop()?.replace(".json", "") ?? "";
        return { name, content: content as TemplateJSON };
    });

type Props = {
    dispatch: any;
    onSuccess?: () => void;
};

export function LoadPlanForm({ dispatch, onSuccess }: Props) {
    const [selectedTemplate, setSelectedTemplate] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleTemplateChange = (name: string) => {
        setSelectedTemplate(name);
        if (!name) return;

        const tpl = templateEntries.find((t) => t.name === name);
        if (!tpl) return;

        dispatch({ type: "LOAD_STUDY_PLAN", state: tpl.content.plan });
        setError(null);
        onSuccess?.();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const plan = await importStudyPlan(file);
            dispatch({ type: "LOAD_STUDY_PLAN", state: plan });
            setError(null);
            onSuccess?.();
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Import fehlgeschlagen.",
            );
        }
        e.target.value = "";
    };

    return (
        <div className="load-plan-form">
            {error && <div className="form-error">{error}</div>}

            <label className="form-field">
                <span>Von Vorlage laden</span>
                <select
                    value={selectedTemplate}
                    onChange={(e) => handleTemplateChange(e.target.value)}
                >
                    <option value="">Template wählen</option>
                    {templateEntries.map((tpl) => (
                        <option key={tpl.name} value={tpl.name}>
                            {tpl.name}
                        </option>
                    ))}
                </select>
            </label>

            <div className="load-plan-divider">oder</div>

            <label className="form-field">
                <span>Von Datei laden</span>
                <input
                    type="file"
                    accept="application/json"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
}
