// routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const { taskValidation } = require('../middleware/validation');

const router = express.Router();
router.use(authMiddleware);

router.post('/', taskValidation, taskController.create); // Création d'une nouvelle tâche
router.put('/:taskId/status', taskController.updateStatus); // Mise à jour du statut d'une tâche
router.get('/:projectId', authMiddleware, taskController.getAllByProject); // Récupération de toutes les tâches
router.delete('/:taskId', authMiddleware, taskController.delete); // Suppression d'une tâche

module.exports = router;