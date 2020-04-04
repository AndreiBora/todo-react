import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class Todo extends Component {
  state = {
    showDescription: true,
  };

  hideDescription = () => {
    this.setState({
      showDescription: !this.state.showDescription,
    });
    console.log(this.state);
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="card mb-2">
        <div className="card-body p-2">
          <FontAwesomeIcon style={timesBtnStyle} icon={faTimes} />
          <div className="card-body">
            <h5 style={textStyle} className="card-title">
              {todo.title}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{todo.category}</h6>
            <h6 className="card-subtitle m-2">
              <FontAwesomeIcon
                onClick={this.hideDescription}
                icon={faEyeSlash}
              />
            </h6>
            {this.state.showDescription ? (
              <p className="card-text">{todo.description}</p>
            ) : null}
          </div>
          <div className="card-footer text-muted">
            Posted date :{todo.date.toLocaleString()}
          </div>
        </div>
      </div>
    );
  }
}

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
