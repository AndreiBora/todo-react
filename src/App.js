import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Todos />
    </div>
  );
}

export default App;
