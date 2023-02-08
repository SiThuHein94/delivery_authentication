const Joi = require('joi');

const authValidationModel = Joi.object({
    loginId: Joi.string().alphanum().min(3).required(),
    password: Joi.string().required(),
}).unknown(true);

module.exports = { authValidationModel }