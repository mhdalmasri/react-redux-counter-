import React, { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <div>
        Last Update : {this.props.date ? this.props.date.toString() : "Not Yet"}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    date: state.date
  };
};
export default connect(mapStateToProps)(Footer);
