import React, { useState } from "react";
import "./App.css";
import InputField from "./componenets/InputField";
import { TodoProps } from "./types";
import TodoList from "./componenets/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setToDos] = useState<TodoProps[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setToDos([...todos, { id: Date.now(), todo: todo, isDone: false }]); //every todo is an object stored in an array
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskament</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setToDos={setToDos} />
    </div>
  );
};

export default App;
