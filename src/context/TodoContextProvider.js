import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
    case "ADD_TODOS":
      return action.payload;
    default:
      return state;
  }
};

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/v1/todos")
      .then((todos) => dispatch({ type: "ADD_TODOS", payload: todos.data }));
  }, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
