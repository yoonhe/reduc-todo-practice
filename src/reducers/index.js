import {
  WRITETODO,
  ADDTODO,
  CLICKGROUP,
  DELETETODO,
  COMPLETETODO
} from "../actions";

const initialState = {
  inputValue: "",
  todoList: [],
  groupList: [
    { mode: "All", isClicked: true },
    { mode: "Complete", isClicked: false },
    { mode: "Active", isClicked: false }
  ],
  currentGroup: "All"
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITETODO:
      return Object.assign({}, state, {
        inputValue: action.value
      });

    case ADDTODO:
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList,
          {
            value: state.inputValue,
            key: action.key,
            isChecked: false
          }
        ]
      });

    case CLICKGROUP:
      let newGroup = JSON.parse(JSON.stringify(state.groupList));
      return Object.assign({}, state, {
        currentGroup: action.currentGroupName,
        groupList: newGroup.map(group => {
          if (group.mode === action.currentGroupName) {
            group.isClicked = true;
            return group;
          } else {
            group.isClicked = false;
            return group;
          }
        })
      });

    case DELETETODO:
      return Object.assign({}, state, {
        todoList: state.todoList.filter(todo => {
          if (todo.key !== action.deleteItem) {
            return todo;
          }
        })
      });

    case COMPLETETODO:
      let newTodos = JSON.parse(JSON.stringify(state.todoList));
      return Object.assign({}, state, {
        todoList: newTodos.map(todo => {
          if (todo.key === action.completeItem) {
            todo.isChecked = !todo.isChecked;
          }
          return todo;
        })
      });
    default:
      return state;
  }
};

export default todoReducer;
