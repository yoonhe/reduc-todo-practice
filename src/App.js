import React from "react";
import TodoInputBox from "./components/TodoInputBox";
import TodoGroup from "./components/TodoGroup";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoInputBox />
      <TodoGroup />
      <TodoList />
    </div>
  );
}

export default App;
