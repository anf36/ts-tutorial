import React from "react";
import "./App.css";
import Myform from "./components/Myform";
import Counter from "./components/Counter";
import ReducerSample from "./components/ReducerSample";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <Myform onSubmit={onSubmit} />
    // <ReducerSample />
  );
}

export default App;
