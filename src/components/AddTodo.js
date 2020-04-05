import React, { Component } from "react";
import uuid from "uuid";
import { Route, withRouter } from "react-router-dom";

class AddTodo extends Component {
  state = { title: "", category: "", description: "" };
  handleSubmit = (event) => {
    const { title, category, description } = this.state;
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      category,
      description,
      date: new Date(),
    };
    this.props.addTodo(newTodo);
    this.clearInput();
    this.props.history.push("/");
  };

  clearInput() {
    this.setState({
      title: "",
      category: "",
      description: "",
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
                <input
                  id="category"
                  type="text"
                  className="form-control"
                  value={this.state.category}
                  onChange={(event) =>
                    this.setState({ category: event.target.value })
                  }
                  placeholder="Todo category"
                  required
                />
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
                  Add Todo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddTodo);
