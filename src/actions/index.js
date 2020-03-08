export const WRITETODO = "WRITETODO";
export const WRITETODOCANCLE = "WRITETODOCANCLE";
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

export function writeTodoCancle() {
  return {
    type: WRITETODOCANCLE
  };
}

export function addTodo(currentTime) {
  return {
    type: ADDTODO,
    key: currentTime
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
