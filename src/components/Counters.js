import React, { Component } from "react";
import { connect } from "react-redux";

class Counters extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };
  toggleclick = () => {
    this.props.dispatch({ type: "TOGGLECLICK" });
  };

  render() {
    return (
      <div>
      
        <button onClick={this.increment}>+ 1</button>
        <button onClick={this.decrement}>- 1</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.toggleclick}>
          {this.props.show ? "Hide" : "Show"}
        </button>
        <div>{this.props.show ? <h2>Counter : {this.props.count}</h2> : ""}</div>
        <div>
          {this.props.show ?<h2> Clicks : {this.props.click}</h2>: ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    show: state.show,
    date: state.date,
    status: state.status,
    click: state.click
  };
};
export default connect(mapStateToProps)(Counters);
