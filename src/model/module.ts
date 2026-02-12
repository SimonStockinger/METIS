export type ModuleType =
  | "pflicht"
  | "wahl"
  | "thesis";

export type Module = {
  id: string;
  name: string;
  ects: number;
  type: ModuleType;
  prerequisites: string[];
  category: string;
};

