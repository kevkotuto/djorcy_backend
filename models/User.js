// models/User.js
const db = require('../config/database');

const User = {
    create: async (email, password) => {
        const [result] = await db.execute(
            'INSERT INTO users (email, password) VALUES (?, ?)',
            [email, password]
        );
        return result;
    },

    findByEmail: async (email) => {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },

    findById : async (id) => {
        const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    },
};

module.exports = User;