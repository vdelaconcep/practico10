const Joi = require('joi');

const usuario = Joi.object({
    nombre: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    edad: Joi.number()
        .integer()
        .min(1)
        .max(130)
        .required()
});

module.exports = usuario;