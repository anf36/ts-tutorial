import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useTodosDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch({
        type: "CREATE",
        text: value,
      });
      setValue("");
    } else {
      setError("입력값이 존재하지 않습니다,");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="해야할 일"
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
      />
      <button>등록</button>
      <p>{error}</p>
    </form>
  );
}

export default TodoForm;
