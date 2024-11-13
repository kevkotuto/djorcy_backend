// middleware/validation.js
const Joi = require('joi');

// Schéma de validation pour l'inscription
const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
};

// Schéma de validation pour la connexion
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
};

// Schéma de validation pour la création de projet
const projectValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
};

// Schéma de validation pour la création de tâche
const taskValidation = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().optional(),
        status: Joi.string().valid('pas commencé', 'en cours', 'terminé', 'archivé').required(),
        projectId: Joi.number().required(),
        assignedTo: Joi.number().optional(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    next();
};

module.exports = {
    registerValidation,
    loginValidation,
    projectValidation,
    taskValidation,
};