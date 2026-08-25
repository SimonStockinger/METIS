import { useDraggable } from "@dnd-kit/core";
import type { Module } from "@/model/module";

type Props = {
    module: Module;
    semesterId?: string;
    categoryStr?: string;
    dispatch: any;
};

export function ModuleCard({
    module,
    semesterId,
    categoryStr,
    dispatch,
}: Props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: module.id,
        data: { moduleId: module.id, from: { semesterId, categoryStr } },
    });

    const handleDelete = () => {
        dispatch({
            type: "REMOVE_MODULE",
            moduleId: module.id,
        });
    };

    const handleTogglePassed = () => {
        dispatch({
            type: "TOGGLE_MODULE_PASSED",
            moduleId: module.id,
        });
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`module-card ${module.passed ? "passed" : "planned"}`}
            style={{
                transform: transform
                    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
                    : undefined,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 14px",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                marginBottom: "8px",
                cursor: "grab",
            }}
        >
            <div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    {module.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    {module.ects} ECTS
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                    type="button"
                    title="Modul entfernen"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={handleDelete}
                    style={{
                        background: "#fee2e2",
                        color: "#dc2626",
                        border: "none",
                        borderRadius: "6px",
                        padding: "4px 8px",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                    }}
                >
                    ✕
                </button>
                <button
                    type="button"
                    title={
                        module.passed
                            ? "Als 'Geplant' markieren"
                            : "Als 'Bestanden' markieren"
                    }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={handleTogglePassed}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {module.passed ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                            <path
                                d="M7.5 12.5L10.5 15.5L16.5 9"
                                stroke="#ffffff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle cx="12" cy="12" r="10" fill="#f97316" />
                            <path
                                d="M12 7.5V13"
                                stroke="#ffffff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                            />
                            <circle cx="12" cy="16.5" r="1.25" fill="#ffffff" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
