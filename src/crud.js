import localMock from './_mock_/localStorageMock.js';

const localTaskKey = 'todoList';
const tasks = [];
const taskInput = document.querySelector('[data-task-input]');

const save = () => {
  localMock.setItem(localTaskKey, JSON.stringify(tasks));
};

const editTask = (e) => {
  const edit = e.target;
  if (edit.tagName.toLowerCase() === 'textarea') {
    // eslint-disable-next-line eqeqeq
    const selectedEdit = localMock.find((task) => task.id == edit.id);
    selectedEdit.description = edit.value;
  }
  save();
};

export {
  tasks, taskInput, save, editTask,
};