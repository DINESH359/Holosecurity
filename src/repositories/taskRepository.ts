import { Task } from '../models/taskModel';

const tasks: Task[] = [];
let currentId = 1;

export const createTaskRepo = (task: Omit<Task, 'id'>): Task => {
    const newTask = { id: currentId++, ...task };
    tasks.push(newTask);
    return newTask;
};

export const getAllTasksRepo = (): Task[] => tasks;

export const getTaskByIdRepo = (id: number): Task | undefined => tasks.find((task) => task.id === id);

export const updateTaskRepo = (id: number, updatedFields: Partial<Task>): Task | undefined => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        Object.assign(task, updatedFields);
    }
    return task;
};

export const deleteTaskRepo = (id: number): boolean => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
};
