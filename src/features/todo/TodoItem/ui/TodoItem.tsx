import { ITodo, TodoStatus } from "../../../../entities/todo/model/types";
import { Button } from "../../../../shared/ui/button/Button";

interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: ITodoItemProps) => (
  <div className="flex items-center justify-between p-3 border-b last:border-b-0">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={todo.status === TodoStatus.COMPLETED}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5"
      />
      <span
        className={
          todo.status === TodoStatus.COMPLETED
            ? "line-through text-gray-500"
            : ""
        }
      >
        {todo.title}
      </span>
    </div>
    <Button color="red" onClick={() => onDelete(todo.id)}>
      Delete
    </Button>
  </div>
);
