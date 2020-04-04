import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NavBar from "./components/NavBar";
import AddTodo from "./components/AddTodo";

function App() {

  return (
    <div className="App">
      <NavBar />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
