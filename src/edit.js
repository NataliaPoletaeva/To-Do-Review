import localMock from './_mock_/localStorageMock.js';

const localTaskKey = 'todoList';
const tasks = [];
const taskInput = document.querySelector('[data-task-input]');

const save = () => {
  localMock.setItem(localTaskKey, JSON.stringify(tasks));
};

const editTask = (tasks, newTask) => {
  const selectedEdit = tasks[0];
  selectedEdit.description = newTask;
  localMock.setItem(localTaskKey, JSON.stringify(selectedEdit));
};

export {
  tasks, taskInput, save, editTask,
};