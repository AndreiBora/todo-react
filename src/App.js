import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <NavBar />
      <div className="row">
        <div className="col">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
