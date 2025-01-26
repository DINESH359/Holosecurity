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

        console.log("Received data for creating task:", { title, description, completed });

        if (!title || !description || typeof completed !== 'boolean') {
            console.log("Validation failed: Missing title, description, or invalid completed value");
            res.status(400).json({ error: 'Invalid input: title, description, and completed are required.' });
            return;
        }

        const task = createTaskService({ title, description, completed });
        console.log("Task created successfully:", task);
        res.status(201).json(task);
    } catch (error) {
        console.error("Error in createTask:", error);
        next(error);
    }
};

export const getAllTasks = (_req: Request, res: Response, next: NextFunction): void => {
    try {
        console.log("Fetching all tasks...");
        const tasks = getAllTasksService();
        console.log("Tasks fetched:", tasks);
        res.json(tasks);
    } catch (error) {
        console.error("Error in getAllTasks:", error);
        next(error);
    }
};

export const getTaskById = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params;
        console.log("Fetching task with ID:", id);

        if (!id || isNaN(Number(id))) {
            console.log("Validation failed: Invalid task ID");
            res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
            return;
        }

        const task = getTaskByIdService(Number(id));
        if (!task) {
            console.log("Task not found for ID:", id);
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        console.log("Task found:", task);
        res.json(task);
    } catch (error) {
        console.error("Error in getTaskById:", error);
        next(error);
    }
};

export const updateTask = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params;
        const updatedFields = req.body;

        console.log("Updating task with ID:", id);
        console.log("Updated fields:", updatedFields);

        if (!id || isNaN(Number(id))) {
            console.log("Validation failed: Invalid task ID");
            res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
            return;
        }

        const task = updateTaskService(Number(id), updatedFields);
        if (!task) {
            console.log("Task not found for ID:", id);
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        console.log("Task updated:", task);
        res.json(task);
    } catch (error) {
        console.error("Error in updateTask:", error);
        next(error);
    }
};

export const deleteTask = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { id } = req.params;
        console.log("Deleting task with ID:", id);

        if (!id || isNaN(Number(id))) {
            console.log("Validation failed: Invalid task ID");
            res.status(400).json({ error: 'Invalid task ID. ID must be a number.' });
            return;
        }

        const success = deleteTaskService(Number(id));
        if (!success) {
            console.log("Task not found for ID:", id);
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        console.log("Task deleted successfully with ID:", id);
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error("Error in deleteTask:", error);
        next(error);
    }
};
