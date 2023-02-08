const express = require('express');
const { healthCheck } = require('../controllers/heartbeat.controller');
// const tokenMiddleware = require("../middleware/token.middleware")
const router = express.Router();

// router.route('/heartbeat').get(tokenMiddleware, healthCheck); //example for token middleware
router.route('/heartbeat').get(healthCheck);//example for without token middleware

module.exports = {
    heartbeatRouter: (app) => app.use('/', router),
};