const express = require('express');

const { adminCreate } = require('../controllers/admin.controller');

const router = express.Router();

router.route('/registration').post(adminCreate);

module.exports = {
    adminRouter: (app) => app.use('/admin', router),
};