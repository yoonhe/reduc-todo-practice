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
          <button className="cancle" onClick={() => this.props.resetInput()}>Cancle</button>
          <button
            className="add"
            onClick={() =>
              this.props.value !== "" && (this.props.addTodo(Date.now()), this.props.resetInput())
            }
          >
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

// action이 발생되면 dispatch가 받고 dispathch는 reducer를 호출한다
const mapDispatchToProps = dispatch => {
  return {
    changeValue: value => dispatch(writeTodo(value)),
    resetInput: () => dispatch(writeTodo("")),
    addTodo: date => dispatch(addTodo(date))
  };
};

TodoInputBox = connect(mapStateToProps, mapDispatchToProps)(TodoInputBox);

export default TodoInputBox;
