const express = require('express');

const { authValidator } = require("../middleware/validator/auth.validator");
const { adminLogin } = require('../controllers/auth.controller');

const router = express.Router();

router.route('/auth/login').post(authValidator, adminLogin);

module.exports = {
    authRouter: (app) => app.use('/admin', router),
};