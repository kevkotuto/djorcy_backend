// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded; // Stocke les données décodées dans `req.user` pour un accès ultérieur
        next();
    } catch (error) {
        res.status(401).send({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;