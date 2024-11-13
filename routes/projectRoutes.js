// routes/projectRoutes.js
const express = require('express');
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const { projectValidation } = require('../middleware/validation');

const router = express.Router();
router.use(authMiddleware);

router.post('/', projectValidation, projectController.create); // Création d'un projet
router.get('/', projectController.list); // Récupération de tous les projets de l'utilisateur

module.exports = router;