import { Request, Response, NextFunction } from 'express';
import {
    createTaskService,
    getAllTasksService,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService
} from '../services/taskService';


export const createTask = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { title, description, completed } = req.body;

        if (!title || !description || typeof completed !== 'boolean') {
            res.status(400).json({ error: 'Invalid input: title, description, and completed are required.' });
            return;
        }

        const task = createTaskService({ title, description, completed });
        res.status(201).json(task);
    } catch (error) {
        next(error); 
    }
};


export const getAllTasks = (_req: Request, res: Response, next: NextFunction): void => {
    try {
        const tasks = getAllTasksService();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};


export const getTaskById = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params; 

        if (!id || isNaN(Number(id))) {
            res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
            return;
        }

        const task = getTaskByIdService(Number(id));
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        res.json(task);
    } catch (error) {
        next(error);
    }
};


export const updateTask = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params; 
        const updatedFields = req.body;

        if (!id || isNaN(Number(id))) {
            res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
            return;
        }

        const task = updateTaskService(Number(id), updatedFields);
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        res.json(task);
    } catch (error) {
        next(error);
    }
};


export const deleteTask = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params; 

        if (!id || isNaN(Number(id))) {
            res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
            return;
        }

        const success = deleteTaskService(Number(id));
        if (!success) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        next(error);
    }
};
