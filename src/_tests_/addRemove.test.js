import { addTask, removeTask } from '../_mock_/addTask.js';

describe('Todo list functionality', () => {
  let tasks = [];
  const todoStr = 'test';
  // addTodo test
  test('addTask', () => {
    addTask(tasks, todoStr);
    expect(tasks).toHaveLength(1);
    expect(tasks[0].description).toBe('test');
  });

  test('removeTask', () => {
    const todo = tasks[0];
    tasks = removeTask(todo, tasks);
    expect(tasks).toHaveLength(0);
  });
});