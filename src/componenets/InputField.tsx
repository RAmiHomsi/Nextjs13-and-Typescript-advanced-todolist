import React, { useState, useRef } from "react";
import "./styles.css";
import { InputFieldProps } from "../types/index";

const InputField = ({ handleAdd }: InputFieldProps) => {
  const [todo, setTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      handleAdd({ id: Date.now(), todo, isDone: false });
      setTodo("");
      inputRef.current?.blur();
    }
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        className="inputbox"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="inputsubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
