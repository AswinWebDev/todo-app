import React from "react";
import { Component } from "react";
import "./Todo.css";
// import { render } from "react-dom";
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: [],
    };
  }
  render() {
    return (
      <div className="todo">
        <div className="page-title">Todo App</div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (e.target[0].value !== "")
                this.setState({
                  task: [...this.state.task, e.target[0].value],
                });
              e.target[0].value = "";
            }}
          >
            <input
              className="search-box"
              type="search"
              placeholder="type here!"
            />
            <button className="search-button" type="submit">
              Add
            </button>
          </form>
        </div>
        {this.state.task.map((mov, index) => {
          return (
            <div key={index} className="todo-box">
              <input className="checkbox" type="checkbox" />
              <span>{mov}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
