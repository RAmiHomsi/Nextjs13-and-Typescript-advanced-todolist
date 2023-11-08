import React from "react";
import "./styles.css";
import { TodoListProps } from "../types/index";
import SingleTodo from "./SingleTodo";

const TodoList: React.FC<TodoListProps> = ({ todos, dispatch }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
