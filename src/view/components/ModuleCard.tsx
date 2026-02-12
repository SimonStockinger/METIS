import { useDraggable } from "@dnd-kit/core";
import type { Module } from "../domain/module";

type Props = {
  module: Module;
  semesterId: string;
  category: string;
};

export function ModuleCard({ module, semesterId, category }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: module.id,
    data: { moduleId: module.id, from: { semesterId, category } }
  });

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
    </div>
  );
}
