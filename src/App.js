import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0
    };
  }

  Reset = () => {
    this.setState({ count: 0 });
  };

  updateCounter = type => {
    switch (type) {
      case "INCREMENT":
        return this.setState(state => {
          return { count: state.count + 1 };
        });
      case "DECREMENT":
        return this.setState(state => {
          return { count: state.count - 1 };
        });
      case "DECREMENT":
        return this.setState(state => {
          return { count: state.count - 1 };
        });
      case "RESET":
        return this.setState(state => {
          return { count: (state.count = 0) };
        });
      default:
        return this.state;
    }
  };

  ToggleClick = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Counter and Toggle - Update</h2>
          <button onClick={() => this.updateCounter("INCREMENT")}>+ 1</button>
          <button onClick={() => this.updateCounter("DECREMENT")}>- 1</button>
          <button onClick={() => this.updateCounter("RESET")}>Reset</button>
          {this.state.show ? <h2>{this.state.count}</h2> : ""}
          <button onClick={this.ToggleClick}>
            {this.state.show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
