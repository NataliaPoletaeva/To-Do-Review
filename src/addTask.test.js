/**
 * @jest-environment jsdom
 */

import { addTask, removeTask } from './addTask.js';

describe('Todo list functionality', () => {
  let tasks = [];

  test('addTask', () => {
    const task = 'test';
    addTask(tasks, task);
    expect(tasks).toHaveLength(1);
    expect(tasks[0].description).toBe('test');
  });

  test('removeTask', () => {
    const task = tasks[0];
    tasks = removeTask(task, tasks);
    expect(tasks).toHaveLength(0);
  });
});