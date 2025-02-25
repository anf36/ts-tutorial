import React, { useState, ChangeEvent, FormEvent } from "react";
import useAddTodo from "../hooks/useAddTodo";

export default function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return(
    <form onSubmit={onSubmit}>
      <input 
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}
