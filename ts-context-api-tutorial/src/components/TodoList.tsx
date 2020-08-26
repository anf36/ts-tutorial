import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../contexts/TodosContext";

function TodoList() {
  const todos = useTodoState();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
