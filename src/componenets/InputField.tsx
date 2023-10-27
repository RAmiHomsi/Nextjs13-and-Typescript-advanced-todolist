import React, { useRef } from "react";
import "./styles.css";
import { InputFieldPros } from "../types";

const InputField = ({ todo, setTodo, handleAdd }: InputFieldPros) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
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
