export type Semester = {
  id: string;
  label: string;
  order: number;
  modulesByCategory: Record<string, string[]>; 
};