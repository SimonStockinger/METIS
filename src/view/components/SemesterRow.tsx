import { useDroppable } from "@dnd-kit/core";
import type { Semester } from "@/model/semester";
import type { Module } from "@/model/module";
import { ModuleCard } from "./ModuleCard";
import type { Category } from "@/model/category";

type Props = {
  semester: Semester;
  modules: Record<string, Module>;
  categories: Category[];

  dispatch: any
};

function SemesterRow({ semester, modules, categories, dispatch }: Props) {
  const semesterECTS = categories.reduce((sum, category) => {
    const moduleIds = semester.modulesByCategory[category.name] ?? [];
    return (
      sum +
      moduleIds.reduce((modAcc, id) => modAcc + (modules[id]?.ects || 0), 0)
    );
  }, 0);

  return (
    <div className="semester-row">
      <div className="semester-label">{semester.label}</div>

      {categories.map((category) => {
        const categoryModuleIds = semester.modulesByCategory[category.name] ?? [];
        const categoryModules = categoryModuleIds.map((id) => modules[id]);
        return (
          <SemesterCell
            key={category.name}
            semesterId={semester.id}
            categoryStr={category.name}
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
  categoryStr: string;
  modules: Module[];

  dispatch: any
};

function SemesterCell({ semesterId, categoryStr, modules, dispatch }: CellProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `${semesterId}-${categoryStr}`,
    data: { semesterId, categoryStr }
  });

  return (
    <div
      ref={setNodeRef}
      className={`semester-cell ${isOver ? "is-over" : ""}`}
    >
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} semesterId={semesterId} categoryStr={categoryStr} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default SemesterRow;