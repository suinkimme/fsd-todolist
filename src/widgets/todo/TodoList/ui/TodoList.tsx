import { ITodo } from "../../../../entities/todo/model/types";
import { TodoItem } from "../../../../features/todo/TodoItem/ui/TodoItem";
import { Card } from "../../../../shared/ui/card/Card";

interface ITodoListProps {
  todos: ITodo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete }: ITodoListProps) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">No tasks to display</p>
    );
  }

  return (
    <Card>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </Card>
  );
};
