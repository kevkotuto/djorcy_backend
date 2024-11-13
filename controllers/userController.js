// controllers/userController.js
const User = require('../models/User');

const userController = {
    inviteUser: async (req, res) => {
        const { email, projectId } = req.body;
        // Logique pour inviter un utilisateur (par exemple, en envoyant un email d'invitation)
        // Pour l'instant, nous retournons simplement un message de succès
        res.send({ message: `User with email ${email} invited to project ${projectId}` });
    },

    getUserProfile: async (req, res) => {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.send(user);
    },
};

module.exports = userController;