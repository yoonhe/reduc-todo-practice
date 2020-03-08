import React, { Component } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  render() {
    console.log(this.props.currentGroup === "All");
    return (
      <dl className="todo-list-box">
        <dt>
          <p>Todos</p>
          <p>Actions</p>
        </dt>
        {(() => {
          if (this.props.currentGroup === "All") {
            return this.props.todoList.map((todo, idx) => (
              <TodoListItem key={idx} todo={todo} />
            ));
          } else if (this.props.currentGroup === "Complete") {
            return this.props.todoList
              .filter(todo => todo.isChecked)
              .map((todo, idx) => <TodoListItem key={idx} todo={todo} />);
          } else if (this.props.currentGroup === "Active") {
            console.log("active~!");
            return this.props.todoList
              .filter(todo => !todo.isChecked)
              .map((todo, idx) => <TodoListItem key={idx} todo={todo} />);
          }
        })()}
      </dl>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    currentGroup: state.currentGroup
  };
};

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList;
