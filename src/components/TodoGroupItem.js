import React, { Component } from "react";
import { connect } from "react-redux";
import { clickGroup } from "../actions";

class TodoGroupItem extends Component {
  render() {
    const isOn = this.props.group.isClicked ? "on" : "";

    return (
      <li
        className={isOn}
        onClick={() => this.props.clickGroup(this.props.group.mode)}
      >
        {this.props.group.mode}
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickGroup: target => dispatch(clickGroup(target))
  };
};
TodoGroupItem = connect(null, mapDispatchToProps)(TodoGroupItem);

export default TodoGroupItem;
