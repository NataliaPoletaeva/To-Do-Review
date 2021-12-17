/**
 * @jest-environment jsdom
 */

import clearAll from './clear-all.js';

describe('To-do list functionality', () => {
  const task1 = 'test1';
  const task2 = 'test2';
  const task3 = 'test3';
  let tasks = [
    {
      id: 1,
      description: task1,
      completed: false,
    },
    {
      id: 2,
      description: task2,
      completed: true,
    },
    {
      id: 3,
      description: task3,
      completed: true,
    },
  ];

  test('Clear all tasks', () => {
    tasks = clearAll(tasks, task1, task2, task3);
    expect(tasks).toHaveLength(1);
  });
});