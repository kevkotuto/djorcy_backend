// models/Task.js
const db = require('../config/database');

const Task = {
    create: async (title, description, status, projectId, assignedTo) => {
        const [result] = await db.execute(
            'INSERT INTO tasks (title, description, status, project_id, assigned_to) VALUES (?, ?, ?, ?, ?)',
            [title, description, status, projectId, assignedTo]
        );
        return result;
    },

    updateStatus: async (taskId, status) => {
        await db.execute('UPDATE tasks SET status = ? WHERE id = ?', [status, taskId]);
    },
    
    getAllByProject: async (projectId) => {
        const [rows] = await db.execute('SELECT * FROM tasks WHERE project_id = ?', [projectId]);
        return rows;
    },

    getById: async (taskId) => {
        const [rows] = await db.execute('SELECT * FROM tasks WHERE id = ?', [taskId]);
        return rows[0];
    },

    delete: async (taskId) => {
        await db.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
    },

    // Add more methods as needed for your application


};

module.exports = Task;