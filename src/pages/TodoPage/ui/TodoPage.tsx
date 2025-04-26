import React, { useState } from "react";
import {
  ITodo,
  TodoStatus,
  TodoFilter,
} from "../../../entities/todo/model/types";
import { createTodo } from "../../../entities/todo/model/todo";
import { AddTodoForm } from "../../../features/todo/addTodo/ui/AddTodoForm";
import { FilterTodos } from "../../../features/todo/FilterTodos/ui/FilterTodos";
import { useToggleTodo } from "../../../features/todo/ToggleTodo/model/useToggleTodo";
import { Stats } from "../../../widgets/todo/Stats/ui/Stats";
import { TodoList } from "../../../widgets/todo/TodoList/ui/TodoList";
import { Button } from "../../../shared/ui/button/Button";

export const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>("All");

  const addTodo = (title: string) => {
    setTodos([...todos, createTodo(title)]);
  };

  const toggleTodo = useToggleTodo(todos, setTodos);

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.status !== TodoStatus.COMPLETED));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return todo.status === TodoStatus.ACTIVE;
    if (filter === "Completed") return todo.status === TodoStatus.COMPLETED;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">TodoList</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <div className="flex justify-between items-center mb-4">
        <FilterTodos
          activeFilter={filter}
          onFilterChange={(newFilter) => setFilter(newFilter)}
        />

        {todos.some((todo) => todo.status === TodoStatus.COMPLETED) && (
          <Button color="gray" onClick={clearCompleted}>
            Clear Completed
          </Button>
        )}
      </div>

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      <Stats todos={todos} />
    </div>
  );
};
