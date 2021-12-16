import { save } from './crud.js';
import render from './render.js';
import localMock from './_mock_/localStorageMock.js';

const taskForm = document.querySelector('[data-task-form]');

const check = (e) => {
  const checkbox = e.target;
  if (checkbox.tagName.toLowerCase() === 'input') {
    // eslint-disable-next-line eqeqeq
    const selectedTask = localMock.find((task) => task.id == checkbox.id);
    selectedTask.completed = checkbox.checked;
  }
  save();
  render();
};

export { taskForm, check };