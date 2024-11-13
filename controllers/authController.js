// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { jwtSecret } = require('../config/env');

const authController = {
    register: async (req, res) => {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create(email, hashedPassword);
        res.status(201).send({ message: 'User registered successfully' });
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, jwtSecret);
        res.send({ token });
    },
};

module.exports = authController;