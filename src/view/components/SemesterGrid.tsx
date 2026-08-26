import { useDroppable } from "@dnd-kit/core";
import type { Semester } from "@/model/semester";
import type { Module } from "@/model/module";
import { ModuleCard } from "./ModuleCard";
import type { Category } from "@/model/category";
import type { CountMode } from "./CountModeToggle";

type Props = {
    semesters: Semester[];
    modules: Record<string, Module>;
    categories: Category[];
    dispatch: any;
    countMode: CountMode;
};

function ectsOf(mod: Module | undefined, countMode: CountMode): number {
    if (!mod) return 0;
    if (countMode === "passed" && !mod.passed) return 0;
    return mod.ects;
}

export function SemesterGrid({
    semesters,
    modules,
    categories,
    dispatch,
    countMode,
}: Props) {
    let cumulativeECTS = 0;

    const categoryTotals: Record<string, number> = {};
    for (const cat of categories) {
        categoryTotals[cat.name] = semesters.reduce((sum, semester) => {
            const ids = semester.modulesByCategory[cat.name] ?? [];
            return (
                sum +
                ids.reduce(
                    (modAcc, id) => modAcc + ectsOf(modules[id], countMode),
                    0,
                )
            );
        }, 0);
    }

    return (
        <>
            <div className="semester-grid">
                <div
                    className="semester-grid-header"
                    style={
                        { "--cols": categories.length } as React.CSSProperties
                    }
                >
                    <div className="semester-label-header">Semester</div>

                    {categories.map((cat) => (
                        <div key={cat.name} className="category-header">
                            <div>{cat.name}</div>
                            <div>{cat.credits} LP</div>
                            <div className="category-total">
                                ({categoryTotals[cat.name]})
                            </div>
                        </div>
                    ))}
                    <div className="semester-label-header">ECTS</div>
                </div>

                <div className="semester-grid-rows">
                    {semesters.map((semester) => {
                        const semesterECTS = categories.reduce((sum, cat) => {
                            const ids =
                                semester.modulesByCategory[cat.name] ?? [];
                            return (
                                sum +
                                ids.reduce(
                                    (modAcc, id) =>
                                        modAcc + ectsOf(modules[id], countMode),
                                    0,
                                )
                            );
                        }, 0);

                        cumulativeECTS += semesterECTS;

                        return (
                            <div
                                key={semester.id}
                                className="semester-row"
                                style={
                                    {
                                        "--cols": categories.length,
                                    } as React.CSSProperties
                                }
                            >
                                <div className="semester-label">
                                    {semester.label}
                                </div>
                                {categories.map((cat) => {
                                    const moduleIds =
                                        semester.modulesByCategory[cat.name] ??
                                        [];
                                    const validModules = moduleIds
                                        .map((id) => modules[id])
                                        .filter((mod): mod is Module =>
                                            Boolean(mod),
                                        );

                                    return (
                                        <SemesterCell
                                            key={cat.name}
                                            semesterId={semester.id}
                                            categoryStr={cat.name}
                                            modules={validModules}
                                            dispatch={dispatch}
                                        />
                                    );
                                })}

                                <div className="semester-cell semester-summary-cell">
                                    <div>{semesterECTS} LP</div>
                                    <div>&Sigma; {cumulativeECTS}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="semester-footer">
                <div className="semester-grid-total">
                    Gesamt ({countMode === "passed" ? "Bestanden" : "Geplant"}):{" "}
                    {cumulativeECTS} ECTS
                </div>
            </div>
        </>
    );
}

type CellProps = {
    semesterId: string;
    categoryStr: string;
    modules: Module[];
    dispatch: any;
};

function SemesterCell({
    semesterId,
    categoryStr,
    modules,
    dispatch,
}: CellProps) {
    const { setNodeRef, isOver } = useDroppable({
        id: `${semesterId}-${categoryStr}`,
        data: { semesterId, categoryStr },
    });

    return (
        <div
            ref={setNodeRef}
            className={`semester-cell ${isOver ? "is-over" : ""}`}
        >
            {modules.map((module) => (
                <ModuleCard
                    key={module.id}
                    module={module}
                    semesterId={semesterId}
                    categoryStr={categoryStr}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
}
