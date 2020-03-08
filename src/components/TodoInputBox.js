import React, { Component } from "react";
import { connect } from "react-redux";
import { writeTodo, addTodo } from "../actions";

class TodoInputBox extends Component {
  render() {
    return (
      <div className="todo-input-box">
        <input
          type="text"
          onChange={e => this.props.changeValue(e.target.value)}
          value={this.props.value}
        />
        <p className="btn-box">
          <button onClick={() => this.props.writeCancle()}>Cancle</button>
          <button onClick={() => this.props.addTodo(Date.now())}>
            Add Todo
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    value: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValue: value => dispatch(writeTodo(value)),
    writeCancle: () => dispatch(writeTodo("")),
    addTodo: date => dispatch(addTodo(date))
  };
};

TodoInputBox = connect(mapStateToProps, mapDispatchToProps)(TodoInputBox);

export default TodoInputBox;
