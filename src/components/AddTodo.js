import React, { Component } from "react";

class AddTodo extends Component {
    state = { title: '' };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ title: '' });
    };
    render() {
      const { todo } = this.props;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
          placeholder="Todo title" 
          required 
        />
        <button>Add Todo</button>
          </form>
        </div>
      );
    }
  }
  
  export default AddTodo;
  