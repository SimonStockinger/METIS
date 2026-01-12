import { ModuleType } from "../domain/types";
import { AddModuleFormState } from "../hooks/useAddModuleForm";

type Props = {
    form: AddModuleFormState;
    semesters: { id: string; label: string }[];
    categories: string[];
    onChange: <K extends keyof AddModuleFormState>(key: K, value: AddModuleFormState[K]) => void;
    onSubmit: () => void;
};

export function AddModuleForm({ form, semesters, categories, onChange, onSubmit }: Props) {
return (
<div>
<input value={form.name} onChange={(e) => onChange("name", e.target.value)} />
<input
type="number"
value={form.ects}
onChange={(e) => onChange("ects", Number(e.target.value))}
/>
<select value={form.type} onChange={(e) => onChange("type", e.target.value as ModuleType)}>
<option value="pflicht">Pflicht</option>
<option value="wahl">Wahl</option>
<option value="thesis">Thesis</option>
</select>
<select value={form.semesterId} onChange={(e) => onChange("semesterId", e.target.value)}>
<option value="">Semester wählen</option>
{semesters.map((s) => (
<option key={s.id} value={s.id}>{s.label}</option>
))}
</select>
<select value={form.category} onChange={(e) => onChange("category", e.target.value)}>
<option value="">Kategorie wählen</option>
{categories.map((c) => (
<option key={c} value={c}>{c}</option>
))}
</select>
<button onClick={onSubmit}>Modul hinzufügen</button>
</div>
);
}