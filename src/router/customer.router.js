const express = require('express');

const { customerValidator } = require("../middleware/validator/customer.validator");
const { customerRegistration, getCustomer } = require('../controllers/customer.controller');

const router = express.Router();

router.route('/registration').post(customerValidator, customerRegistration);
router.route('').get(getCustomer); // to use in login route

module.exports = {
    customerRouter: (app) => app.use('/customer', router),
};