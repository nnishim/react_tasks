import "./App.css";
import Task from "./components/Task/Task";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    tasks: [{ name: "fgfgf", id: 1 }],
    value: "",
  };

  changeHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const tasks = [...this.state.tasks];

    tasks.push({
      name: this.state.value,
      id: Date.now(),
    });

    this.setState({
      tasks
    });
    this.form.reset();
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <button type="submit">New task</button>
          {this.state.tasks.map((task, index) => {
            return <Task key={task.id} value={this.state.tasks[0].name} remove={() => this.deleteTask(task.id)}></Task>;
          })}
        </form>
      </div>
    );
  }
}
