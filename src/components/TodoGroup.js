import React, { Component } from "react";
import { connect } from "react-redux";
import TodoGroupItem from "./TodoGroupItem";

class TodoGroup extends Component {
  render() {
    return (
      <ul className="group-list">
        {this.props.groupList.map((group, index) => (
          <TodoGroupItem key={index} group={group} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    groupList: state.groupList
  };
};

TodoGroup = connect(mapStateToProps)(TodoGroup);

export default TodoGroup;
