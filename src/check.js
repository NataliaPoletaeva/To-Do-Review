import localMock from './_mock_/localStorageMock.js';

const taskForm = document.querySelector('[data-task-form]');

const updateStatus = (tasks) => {
  if (tasks[0].completed === true) {
    tasks[0].completed = false;
  } else {
    tasks[0].completed = true;
  }
  localMock.setItem('todoList', JSON.stringify(tasks));
};

export { taskForm, updateStatus };