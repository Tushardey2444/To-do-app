let nextTaskId = 0;

export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: {
    id: ++nextTaskId,
    text,
  },
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id,
  },
});