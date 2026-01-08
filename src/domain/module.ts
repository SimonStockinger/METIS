export type ModuleType =
  | "pflicht"
  | "wahl"
  | "projekt"
  | "thesis";

export type Module = {
  id: string;
  name: string;
  ects: number;
  type: ModuleType;
  prerequisites: string[];
  category: string;
};

