import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import TodoContextProvider from "./context/TodoContextProvider";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import UpdateTodo from "./components/UpdateTodo";

const App = () => {
  return (
    <TodoContextProvider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="App container">
            <div className="row">
              <div className="col">
                <Switch>
                  <Route exact path="/add-todo" component={AddTodo} />
                  <Route path="/update-todo/:id" component={UpdateTodo} />
                  <Route exact path="/" component={Todos} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    </TodoContextProvider>
  );
};

export default App;
