import localMock from './_mock_/localStorageMock.js';

const addTask = (tasks, task) => {
  tasks.push({
    id: 1,
    description: task,
    completed: false,
  });
  localMock.setItem('todoList', JSON.stringify(tasks));
};

const removeTask = (task, tasks) => {
  let { index } = task;
  const filteredTasks = tasks.filter((task) => task.index !== index);
  localMock.setItem('todoList', JSON.stringify(filteredTasks));
  return filteredTasks;
};

export { addTask, removeTask };