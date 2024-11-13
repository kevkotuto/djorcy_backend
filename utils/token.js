// utils/token.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');

const generateToken = (payload) => {
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken,
};