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
// input todo 입력기능
// e.target.value를 인자로 받아 state를 업데이트한다

export function addTodo(currentTime) {
  return {
    type: ADDTODO,
    key: currentTime
  };
}
// todo 추가 기능

export function clickGroup(groupName) {
  return {
    type: CLICKGROUP,
    currentGroupName: groupName
  };
}
// all, complete, active중 하나 선택시 currentGroupName에 반영되는 기능

export function deleteTodo(targetKey) {
  return {
    type: DELETETODO,
    deleteItem: targetKey
  };
}
// tatgetKey를 이용해 todo list에서 동일한 key값을 가진 목록을 제외한 나머지 목록을 새로 업데이트한다

export function completeTodo(targetKey) {
  return {
    type: COMPLETETODO,
    completeItem: targetKey
  };
}
// 체크버튼 클릭시 todp list를 순회하여 해당 항목의 키값과 동일한 항목의 isChecked를 true로 바꿔준다 
