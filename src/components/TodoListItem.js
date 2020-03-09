import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, completeTodo } from "../actions";

class TodoListItem extends Component {
  render() {
    const style = {
      textDecoration : this.props.todo.isChecked ? "line-through" : "none"
    }
    const onOffClass = this.props.todo.isChecked ? " on" : "";
    
    return (
      <dd>
        <p style={style}>{this.props.todo.value}</p>
        <p className="controler">
          <button
            className="delete"
            onClick={() => this.props.todoDelete(this.props.todo.key)}
          >
            삭제
          </button>
          <button
            className={`checked${onOffClass}`}
            onClick={() => this.props.todoComplete(this.props.todo.key)}
          >
            체크
          </button>
        </p>
      </dd>
    );
  }
}

const mapStateToProps = dispatch => {
  return {
    todoDelete: target => dispatch(deleteTodo(target)),
    todoComplete: target => dispatch(completeTodo(target))
  };
};

TodoListItem = connect(null, mapStateToProps)(TodoListItem);

export default TodoListItem;
