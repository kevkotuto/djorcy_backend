// controllers/taskController.js
const Task = require('../models/Task');

const taskController = {
    create: async (req, res) => {
        const { title, description, status, projectId, assignedTo } = req.body;
        const task = await Task.create(title, description, status, projectId, assignedTo);
        res.status(201).send(task);
    },

    updateStatus: async (req, res) => {
        const { status } = req.body;
        const { taskId } = req.params;
        await Task.updateStatus(taskId, status);
        res.send({ message: 'Status updated' });
    },

    getAll : async (req, res) => {
        const tasks = await Task.getAll();
        res.send(tasks);
    },

    getAllByProject : async (req, res) => {
        const { projectId } = req.params;
        const tasks = await Task.getAllByProject(projectId);
        res.send(tasks);
    },

    getById: async (req, res) => {
        const { taskId } = req.params;
        const task = await Task.getById(taskId);
        res.send(task);
    },

    delete: async (req, res) => {
        const { taskId } = req.params;
        await Task.delete(taskId);
        res.send({ message: 'Task deleted' });
    },
};

module.exports = taskController;