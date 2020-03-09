export const WRITETODO = "WRITETODO";
export const ADDTODO = "ADDTODO";
export const CLICKGROUP = "CLICKGROUP";
export const DELETETODO = "DELETETODO";
export const COMPLETETODO = "COMPLETETODO";

export function writeTodo(inputValue) {
  return {
    type: WRITETODO,
    value: inputValue
  };
}

export function addTodo(currentTime, callback) {
  return {
    type: ADDTODO,
    key: currentTime,
    callback : callback
  };
}

export function clickGroup(groupName) {
  return {
    type: CLICKGROUP,
    currentGroupName: groupName
  };
}

export function deleteTodo(targetKey) {
  return {
    type: DELETETODO,
    deleteItem: targetKey
  };
}

export function completeTodo(targetKey) {
  return {
    type: COMPLETETODO,
    completeItem: targetKey
  };
}
