/**
 * @jest-environment jsdom
 */

import { updateStatus } from './check.js';

describe('Todo list functionality', () => {
  const task1 = 'test1';
  const tasks = [
    {
      id: 1,
      description: task1,
      completed: false,
    },
  ];

  test('Status update', () => {
    updateStatus(tasks);
    expect(tasks[0].completed).toBe(true);
  });
});