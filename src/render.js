import {
  editTask,
} from './edit.js';
import { removeTask } from './addTask.js';
import localMock from './_mock_/localStorageMock.js';

const taskContainer = document.createElement('div');

const render = () => {
  const task = {
    index: localMock.length + 1,
    description: 'test',
    completed: false,
  };
  const taskElement = document.createElement('li');
  taskElement.id = task.id;
  taskElement.classList.add('task-description');
  taskElement.innerHTML = `<input class="to-do-item" type="checkbox" id="${task.id}">
          <textarea class="edit" id="${task.id}">${task.description}</textarea>
          <span class="material-icons" id="${task.id}">more_vert</span>
        `;

  const edit = taskElement.querySelector('textarea');
  edit.addEventListener('keyup', editTask);

  const checkBox = taskElement.querySelector('input');
  if (checkBox.hasAttribute('checked')) {
    edit.style.textDecoration = 'line-through';
  }

  const icon = taskElement.querySelector('.material-icons');
  icon.addEventListener('click', () => {
    icon.innerText = 'delete';
    taskElement.style.backgroundColor = '#e8e7b2';
    edit.style.backgroundColor = '#e8e7b2';
    icon.addEventListener('click', removeTask);
  });

  taskContainer.append(taskElement);
};

export default render;