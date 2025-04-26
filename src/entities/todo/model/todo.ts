import { ITodo, TodoStatus } from "./types";

export const createTodo = (title: string): ITodo => ({
  id: Date.now().toString(),
  title,
  status: TodoStatus.ACTIVE,
  createAt: new Date(),
});
