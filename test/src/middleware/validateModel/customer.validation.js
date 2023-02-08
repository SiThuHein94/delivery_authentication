const Joi = require('joi');

const customerValidationModel = Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().min(8).max(30),
    phoneNumber: Joi.string().min(7).max(30).required(),
    address: Joi.string().min(3).max(30)
}).unknown(true);

module.exports = { customerValidationModel }