import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    );
  }
}

export default Todos;
