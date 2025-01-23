import { Task } from '../models/taskModel';
import { createTaskRepo, getAllTasksRepo, getTaskByIdRepo, updateTaskRepo, deleteTaskRepo } from '../repositories/taskRepository';

export const createTaskService = (task: Omit<Task, 'id'>): Task => createTaskRepo(task);

export const getAllTasksService = (): Task[] => getAllTasksRepo();

export const getTaskByIdService = (id: number): Task | undefined => getTaskByIdRepo(id);

export const updateTaskService = (id: number, updatedFields: Partial<Task>): Task | undefined => updateTaskRepo(id, updatedFields);

export const deleteTaskService = (id: number): boolean => deleteTaskRepo(id);
