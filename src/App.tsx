import React, { useReducer, useState } from "react";
import "./App.css";
import InputField from "./componenets/InputField";
import { TodoProps } from "./types/index";
import TodoList from "./componenets/TodoList";
import { todoReducer } from "./types/index";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  const [todo, setTodo] = useState<string>(""); // Initialize todo and setTodo

  const handleAdd = (todo: TodoProps) => {
    dispatch({ type: "ADD", payload: todo });
  };

  return (
    <div className="App">
      <span className="heading">Taskament</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
