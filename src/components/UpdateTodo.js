import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { TodoContext } from "../context/TodoContextProvider";

const UpdateTodo = (props) => {
  const { todos, dispatch } = useContext(TodoContext);
  const { id } = props.match.params;
  const todo = todos.find((todo) => todo.id == id);

  const [title, setTitle] = useState(todo.title);
  const [category, setCategory] = useState(todo.category);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTodo = {
      id,
      title,
      category,
      description,
      date: new Date(),
    };

    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTodo,
    });

    props.history.push("/");
  };

  return (
    <div className="card mb-2">
      <div className="card-body p-2">
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-form-label col-sm-2" htmlFor="title">
              Title
            </label>
            <div className="col-sm-10">
              <input
                id="title"
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option defaultValue value="">
                  Choose here
                </option>
                <option value="Shopping">Shopping</option>
                <option value="Hobby">Hobby</option>
                <option value="Gym">Gym</option>
                <option value="Food">Food</option>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
};

export default withRouter(UpdateTodo);
