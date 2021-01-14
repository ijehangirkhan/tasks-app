const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

export const addTask = (message) => ({
  type: ADD_TASK,
  message,
  id: Math.random(),
  completed: false,
  cancelled: false,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});
