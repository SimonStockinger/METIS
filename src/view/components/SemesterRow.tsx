import { useDroppable } from "@dnd-kit/core";
import type { Semester } from "@/model/semester";
import type { Module } from "@/model/module";
import { ModuleCard } from "./ModuleCard";

type Props = {
  semester: Semester;
  modules: Record<string, Module>;
  categories: string[];

  dispatch: any
};

function SemesterRow({ semester, modules, categories, dispatch }: Props) {
  const semesterECTS = categories.reduce((sum, category) => {
    const moduleIds = semester.modulesByCategory[category] ?? [];
    return (
      sum +
      moduleIds.reduce((modAcc, id) => modAcc + (modules[id]?.ects || 0), 0)
    );
  }, 0);

  return (
    <div className="semester-row">
      <div className="semester-label">{semester.label}</div>

      {categories.map((category) => {
        const categoryModuleIds = semester.modulesByCategory[category] ?? [];
        const categoryModules = categoryModuleIds.map((id) => modules[id]);
        return (
          <SemesterCell
            key={category}
            semesterId={semester.id}
            category={category}
            modules={categoryModules}
            dispatch={dispatch}
          />
        );
      })}

      <div className="semester-cell">
        {semesterECTS} ECTS
      </div>
    </div>
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
        <ModuleCard key={module.id} module={module} semesterId={semesterId} category={category} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default SemesterRow;