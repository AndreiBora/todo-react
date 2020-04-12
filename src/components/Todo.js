import { faEdit, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const Todo = (props) => {
  const [showDescription, setShowDescription] = useState(true);
  const { dispatch } = useContext(TodoContext);
  const hideDescription = () => {
    setShowDescription(!showDescription);
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const { todo } = props;
  return (
    <div className="card mb-2">
      <div className="card-body p-2">
        <FontAwesomeIcon
          onClick={() => deleteTodo(todo.id)}
          style={timesBtnStyle}
          icon={faTimes}
        />
        <Link to={`/update-todo/${todo.id}`}>
          <FontAwesomeIcon style={timesBtnStyle} icon={faEdit} />
        </Link>

        <div className="card-body">
          <h5 style={textStyle} className="card-title">
            {todo.title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{todo.category}</h6>
          <h6 className="card-subtitle m-2">
            <FontAwesomeIcon onClick={hideDescription} icon={faEyeSlash} />
          </h6>
          {showDescription ? (
            <p className="card-text">{todo.description}</p>
          ) : null}
        </div>
        <div className="card-footer text-muted">
          Posted date :{todo.date.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

const textStyle = {
  color: "blue",
  fontSize: "20px",
};

const timesBtnStyle = {
  float: "right",
  marginRight: "10px",
  marginTop: "10px",
  cursor: "pointer",
};

export default Todo;
