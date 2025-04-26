export enum TodoStatus {
  ACTIVE = "active",
  COMPLETED = "completed",
}

export interface ITodo {
  id: string;
  title: string;
  status: TodoStatus;
  createAt: Date;
}

export type TodoFilter = "All" | "Active" | "Completed";
