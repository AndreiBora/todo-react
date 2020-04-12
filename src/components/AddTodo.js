import React, { Component, useState } from "react";
import uuid from "uuid";
import { withRouter } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Shopping");
  const [description, setDescription] = useState("");

  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      category,
      description,
      date: new Date(),
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
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
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(AddTodo);
