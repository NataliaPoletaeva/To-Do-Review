import localMock from './_mock_/localStorageMock.js';

const clearAll = (tasks) => {
  const leaveTasks = tasks.filter((task) => task.completed === false);
  localMock.setItem('todoList', JSON.stringify(leaveTasks));
  return leaveTasks;
};

export default clearAll;