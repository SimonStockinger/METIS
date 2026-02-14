import { useDraggable } from "@dnd-kit/core";
import type { Module } from "@/model/module";

type Props = {
  module: Module;
  semesterId: string;
  categoryStr: string;

  dispatch: any;
};

export function ModuleCard({ module, semesterId, categoryStr, dispatch }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: module.id,
    data: { moduleId: module.id, from: { semesterId, categoryStr } }
  });

  const handleDelete = () => {
    console.log("REMOVE")
    dispatch({
      type: "REMOVE_MODULE",
      moduleId: module.id
    })
  };

  return (
    <div
    ref={setNodeRef}
    {...listeners}
    {...attributes}
    className="module-card"
    style={{
      transform: transform
        ? `translate(${transform.x}px, ${transform.y}px)`
        : undefined
    }}
    >
    <strong>{module.name}</strong>
    <div>{module.ects} ECTS</div>
    <button
      onPointerDown={(e) => e.stopPropagation()}
      onClick={handleDelete}
    >
    löschen
    </button>
  </div>
  );
}
