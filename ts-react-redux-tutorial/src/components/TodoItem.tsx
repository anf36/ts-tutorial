import React from "react";
import { Todo } from "../modules/todos";
import "./TodoItem.css";
import useTodoActions from "../hooks/useTodoActions";

type TodoItempProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItempProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
