import { TodoFilter } from "../../../../entities/todo/model/types";

interface IFilterTodosProps {
  activeFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export const FilterTodos = ({
  activeFilter,
  onFilterChange,
}: IFilterTodosProps) => {
  const filters: TodoFilter[] = ["All", "Active", "Completed"];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1 rounded ${
            activeFilter === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
