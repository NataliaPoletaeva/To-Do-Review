import './style.css';
import { save } from './edit.js';
import render from './render.js';
import { updateStatus, taskForm } from './check.js';
import clearAll from './clear-all.js';
import addTask from './addTask.js';

window.addEventListener('DOMContentLoaded', () => {
  save();
  render();
});

taskForm.addEventListener('submit', addTask);

const unorderedList = document.querySelector('[data-todos]');
unorderedList.addEventListener('change', updateStatus);

const removeAll = document.querySelector('.clear');
removeAll.addEventListener('click', clearAll);