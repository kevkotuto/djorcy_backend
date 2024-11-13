// models/Project.js
const db = require('../config/database');

const Project = {
    create: async (name, description, ownerId) => {
        const [result] = await db.execute(
            'INSERT INTO projects (name, description, owner_id) VALUES (?, ?, ?)',
            [name, description, ownerId]
        );
        return result;
    },

    getAllByUserId: async (userId) => {
        const [rows] = await db.execute('SELECT * FROM projects WHERE owner_id = ?', [userId]);
        return rows;
    },
};

module.exports = Project;