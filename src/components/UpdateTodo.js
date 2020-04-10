import React, { Component } from "react";
import uuid from "uuid";
import { Route, withRouter } from "react-router-dom";

class UpdateTodo extends Component {
  state = { id: "", title: "", category: "", description: "" };
  handleSubmit = (event) => {
    const { id, title, category, description } = this.state;
    event.preventDefault();
    const updatedTodo = {
      id,
      title,
      category,
      description,
      date: new Date(),
    };
    this.props.updateTodoHandler(updatedTodo);
    this.clearInput();
    this.props.history.push("/");
  };

  clearInput() {
    this.setState({
      id: "",
      title: "",
      category: "",
      description: "",
    });
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    const todo = this.props.todos.find((todo) => todo.id == id);
    this.setState({
      id,
      title: todo.title,
      category: todo.category,
      description: todo.description,
    });
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-body p-2">
          <form className="mb-2" onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-form-label col-sm-2" htmlFor="title">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  id="title"
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={(event) =>
                    this.setState({ title: event.target.value })
                  }
                  placeholder="Todo title"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-2" htmlFor="category">
                Category
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="category"
                  value={this.state.category}
                  onChange={(event) =>
                    this.setState({ category: event.target.value })
                  }
                  required
                >
                  <option>Shopping</option>
                  <option>Hobby</option>
                  <option>Gym</option>
                  <option>Food</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-2" htmlFor="description">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  value={this.state.description}
                  onChange={(event) =>
                    this.setState({ description: event.target.value })
                  }
                  placeholder="Todo description"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10 float-sm-right p-0">
                <button type="submit" className="btn btn-primary btn-block ">
                  Update Todo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateTodo);
