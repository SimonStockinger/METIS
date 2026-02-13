import { useDroppable } from "@dnd-kit/core";
import type { Semester } from "@/model/semester";
import type { Module } from "@/model/module";
import { ModuleCard } from "./ModuleCard";

type Props = {
  semesters: Semester[];
  modules: Record<string, Module>;
  categories: string[];
  
  dispatch: any
};

export function SemesterGrid({ semesters, modules, categories, dispatch }: Props) {
  let cumulativeECTS = 0;

  return (
    <>
    <div className="semester-grid">
      <div
        className="semester-grid-header"
        style={{
          "--cols": categories.length
        } as React.CSSProperties}
      >
        <div className="semester-label">Semester</div>
        {categories.map((cat) => (
          <div key={cat} className="category-header">{cat}</div>
        ))}
        <div>Summe ECTS</div>
      </div>

      <div className="semester-grid-rows"
          style={{
          "--cols": categories.length
        } as React.CSSProperties}
        >

      {semesters.map((semester) => {
        const semesterECTS = categories.reduce((sum, cat) => {
          const ids = semester.modulesByCategory[cat] ?? [];
          return sum + ids.reduce((modAcc, id) => modAcc + (modules[id]?.ects || 0), 0);
        }, 0);

        cumulativeECTS += semesterECTS;

        return (
          <div
            key={semester.id}
            className="semester-row"
            style={{"--cols": categories.length} as React.CSSProperties}
          >
            <div className="semester-label">{semester.label}</div>
            {categories.map((cat) => {
              const moduleIds = semester.modulesByCategory[cat] ?? [];
              return (
                <SemesterCell
                  key={cat}
                  semesterId={semester.id}
                  category={cat}
                  modules={moduleIds.map((id) => modules[id])}
                  dispatch={dispatch}
                />
              );
            })}

            <div className="semester-cell">
              {semesterECTS} ({cumulativeECTS})
            </div>
          </div>
        );
      })}
        </div>

    </div>
          <div className="semester-footer"
            style={{"--cols": categories.length} as React.CSSProperties}>
        <div className="semester-grid-total">
          Gesamt: {cumulativeECTS} ECTS
        </div>
      </div>
      </>
  );
}

type CellProps = {
  semesterId: string;
  category: string;
  modules: Module[];

    dispatch: any

};

function SemesterCell({ semesterId, category, modules, dispatch }: CellProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `${semesterId}-${category}`,
    data: { semesterId, category }
  });

  return (
    <div
      ref={setNodeRef}
      className={`semester-cell ${isOver ? "is-over" : ""}`}
    >
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} semesterId={semesterId} category={category} dispatch={dispatch}/>
      ))}
    </div>
  );
}
