import localMock from './localStorageMock.js';

const addTask = (tasks, todo) => {
    tasks.push({
        index: tasks.length + 1,
        description: todo,
        completed: false,
    });
    localMock.setItem('todoList', JSON.stringify(tasks));
};

const removeTask = (todo, tasks) => {
    const { index } = todo;
    const filteredTasks = tasks.filter((todo) => todo.index !== index);
    localMock.setItem('todoList', JSON.stringify(filteredTasks));
    return filteredTasks;
}

export { addTask, removeTask };