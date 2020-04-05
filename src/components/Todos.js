import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    const { todos, deleteTodoHandler } = this.props;
    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodoHandler={deleteTodoHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default Todos;
