import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy milk",
        date: new Date(),
      },
      {
        id: 2,
        title: "Go to gym",
        date: new Date(),
      },
      {
        id: 3,
        title: "Eat healthy",
        date: new Date(),
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    );
  }
}

export default Todos;
