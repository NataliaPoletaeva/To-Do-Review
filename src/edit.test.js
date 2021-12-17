/**
 * @jest-environment jsdom
 */

import { editTask } from './edit.js';

describe('Todo list functionality', () => {
  const task1 = 'test1';
  const newTask = 'no, test2';
  const tasks = [
    {
      id: 1,
      description: task1,
      completed: false,
    },
  ];

  test('Edit task', () => {
    editTask(tasks, newTask);
    expect(tasks[0].description).toBe(newTask);
  });
});