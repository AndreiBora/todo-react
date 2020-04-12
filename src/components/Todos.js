import React, { Component, useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContextProvider";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
