// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.use(authMiddleware);

router.post('/invite', userController.inviteUser); // Inviter un utilisateur à un projet
router.get('/profile', userController.getUserProfile); // Récupérer le profil de l'utilisateur connecté

module.exports = router;