import exportStudyPlan from "@/controller/persistence/exportStudyPlan";
import { importStudyPlan } from "@/controller/persistence/importStudyPlan";
import { initialState } from "@/controller/state/initialState";
import type { TemplateJSON } from "@/model/template";
import { useState } from "react";

const templateModules = import.meta.glob(
  "@/assets/templates/*.json",
  { eager: true, import: "default" }
);


const templateEntries: { name: string; content: TemplateJSON }[] = Object.entries(templateModules).map(
  ([path, content]) => {
    const name = path.split("/").pop()?.replace(".json", "") ?? "";
    return { name, content: content as TemplateJSON };
  }
);


console.log("templateEntries", templateEntries);
  type StudyPlanTopToolbarProbs = {
  state: typeof initialState;
  dispatch: any;
};

  console.log(templateModules);

function StudyPlanTopToolbar({ state, dispatch }: StudyPlanTopToolbarProbs) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const plan = await importStudyPlan(file);
      dispatch({ type: "LOAD_STUDY_PLAN", state: plan });
    } catch (err) {
      alert(err);
    }

    e.target.value = "";
  };

const handleTemplateChange = (name: string) => {
  setSelectedTemplate(name);
  if (!name) return;

  const tpl = templateEntries.find(t => t.name === name);
  if (!tpl) return;

  dispatch({ type: "LOAD_STUDY_PLAN", state: tpl.content.plan });
};

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        <select
          value={selectedTemplate}
          onChange={(e) => handleTemplateChange(e.target.value)}
        >
          <option value="">Template laden</option>
          {templateEntries.map((tpl) => (
            <option key={tpl.name} value={tpl.name}>
              {tpl.name}
            </option>
          ))}
        </select>

        <input type="file" accept="application/json" onChange={handleFileChange} />
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        <button onClick={() => exportStudyPlan(state)}>Plan als JSON speichern</button>
      </div>
    </div>
  );
}

export default StudyPlanTopToolbar;