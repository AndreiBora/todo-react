import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NavBar from "./components/NavBar";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy milk",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum mauris at tellus dictum commodo imperdiet in orci. Curabitur faucibus placerat tortor. Morbi id ipsum magna. Aliquam egestas mi id nisl scelerisque euismod. Duis fringilla ac risus id maximus. Ut nec consectetur ante. Cras a metus interdum, ullamcorper risus sed, laoreet ex. Nunc tincidunt nisi a magna condimentum bibendum. Suspendisse neque purus, porta ut neque quis, accumsan vehicula dui. Vivamus scelerisque nibh maximus risus finibus, eget ullamcorper enim pellentesque. Cras venenatis a ex a tincidunt. Suspendisse non dui arcu. Sed arcu est, tristique at ipsum quis, dictum vestibulum massa. Pellentesque at ex ex. Aliquam feugiat nulla id ligula tempor condimentum. Sed consequat tincidunt nisl at fermentum.",
        category: "Shopping",
        date: new Date(),
      },
      {
        id: 2,
        title: "Go to gym",
        description:
          "Nam imperdiet interdum tempus. Vivamus gravida sem volutpat lacus dictum congue. Sed diam lectus, auctor ultrices auctor non, lacinia quis ipsum. Integer posuere gravida libero id sodales. Suspendisse potenti. Morbi dictum mauris urna, non tincidunt nisi egestas vel. Donec faucibus est quis sem interdum, id consequat lacus gravida. Cras aliquet neque eu placerat imperdiet. Aliquam maximus metus enim, placerat ultricies nisl malesuada et. Cras et augue ut lorem iaculis cursus. Suspendisse potenti. In hac habitasse platea dictumst. Donec aliquet in orci nec efficitur. Praesent bibendum est vel suscipit pellentesque. Donec sollicitudin gravida tellus, et bibendum sem ornare quis. Etiam nec venenatis ligula, a dapibus urna.",
        category: "Hobby",
        date: new Date(),
      },
      {
        id: 3,
        title: "Eat healthy",
        description:
          "Duis fermentum libero pharetra dapibus blandit. Quisque ut lacus pulvinar, condimentum enim sit amet, aliquet neque. Sed malesuada ante id ipsum egestas, id vestibulum magna volutpat. Etiam gravida egestas ultrices. Integer euismod sollicitudin euismod. Aenean aliquet libero lacus, posuere pellentesque velit imperdiet nec. Vestibulum tempus magna ac ligula dapibus, in ullamcorper sapien placerat.",
        category: "Food",
        date: new Date(),
      },
    ],
  };

  addNewTodo = (todoData) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todoData],
    }));
  };

  render() {
    return (
      <div className="App container">
        <NavBar />

        <div className="row">
          <div className="col">
            <AddTodo addTodo={this.addNewTodo} />
            <Todos todos={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
