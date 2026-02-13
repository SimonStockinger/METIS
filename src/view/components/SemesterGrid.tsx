import { useDroppable } from "@dnd-kit/core";
import type { Semester } from "@/model/semester";
import type { Module } from "@/model/module";
import { ModuleCard } from "./ModuleCard";
import type { Category } from "@/model/category";

type Props = {
  semesters: Semester[];
  modules: Record<string, Module>;
  categories: Category[];
  
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
      <div className="semester-label">
          Semester
        </div>
        
        {categories.map((cat) => (
          <div key={cat.name} className="category-header">
            <div>
              {cat.name}
            </div>
            <div>
              {cat.credits} LP
            </div>
            </div>
        ))}
        <div>ECTS</div>
      </div>

      <div className="semester-grid-rows"
          style={{
          "--cols": categories.length
        } as React.CSSProperties}
        >

      {semesters.map((semester) => {
        const semesterECTS = categories.reduce((sum, cat) => {
          const ids = semester.modulesByCategory[cat.name] ?? [];
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
              const moduleIds = semester.modulesByCategory[cat.name] ?? [];
              return (
                <SemesterCell
                  key={cat.name}
                  semesterId={semester.id}
                  category={cat}
                  modules={moduleIds.map((id) => modules[id])}
                  dispatch={dispatch}
                />
              );
            })}

            <div className="semester-cell">
              <div>
                {semesterECTS} 
              </div>
              <div>
                &Sigma; {cumulativeECTS}
              </div>
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
  category: Category;
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
        <ModuleCard key={module.id} module={module} semesterId={semesterId} categoryStr={category.name} dispatch={dispatch}/>
      ))}
    </div>
  );
}
