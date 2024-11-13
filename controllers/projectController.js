// controllers/projectController.js
const Project = require('../models/Project');

const projectController = {
    create: async (req, res) => {
        const { name, description } = req.body;
        const ownerId = req.user.id; // Assuming auth middleware sets req.user
        const project = await Project.create(name, description, ownerId);
        res.status(201).send(project);
    },

    list: async (req, res) => {
        const projects = await Project.getAllByUserId(req.user.id);
        res.send(projects);
    },
};

module.exports = projectController;