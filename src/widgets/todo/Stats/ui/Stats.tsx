import { ITodo, TodoStatus } from "../../../../entities/todo/model/types";

interface IStatsProps {
  todos: ITodo[];
}

export const Stats = ({ todos }: IStatsProps) => {
  const completed = todos.filter(
    (todo) => todo.status === TodoStatus.COMPLETED
  ).length;
  const total = todos.length;

  return (
    <div className="mt-4 text-sm text-gray-600">
      <p>
        {completed} of {total} tasks completed
        {total > 0 && ` (${Math.round((completed / total) * 100)}%)`}
      </p>
    </div>
  );
};
