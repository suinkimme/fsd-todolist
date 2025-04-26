import { useCallback } from "react";
import { ITodo, TodoStatus } from "../../../../entities/todo/model/types";

export const useToggleTodo = (
  todos: ITodo[],
  setTodos: (todos: ITodo[]) => void
) => {
  const toggleTodo = useCallback(
    (id: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                status:
                  todo.status === TodoStatus.ACTIVE
                    ? TodoStatus.COMPLETED
                    : TodoStatus.ACTIVE,
              }
            : todo
        )
      );
    },
    [todos, setTodos]
  );

  return toggleTodo;
};
