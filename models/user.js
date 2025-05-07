const Joi = require('joi');

const usuario = Joi.object({
    nombre: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    edad: Joi.number()
        .integer()
        .positive()
        .max(140)
        .required()
});

module.exports = usuario;