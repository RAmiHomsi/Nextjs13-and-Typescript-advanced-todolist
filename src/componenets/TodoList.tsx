import React from "react";
import "./styles.css";
import { TodoListProps } from "../types";
import SingleTodo from "./SingleTodo";

const TodoList: React.FC<TodoListProps> = ({ todos, setToDos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
};

export default TodoList;
