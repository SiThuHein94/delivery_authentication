const express = require('express');
const path = require('path');
const cors = require('cors');
require('./database/models');
require('dotenv').config();
const apiErrorHandler = require('./middleware/error.middleware');

const { allowedOrigin } = require('./util/cors')
const db = require("./database/models");
db.sequelize.sync();

const { authRouter } = require('./router/auth.router');
const { customerRouter } = require('./router/customer.router');
const { heartbeatRouter } = require('./router/heartbeat.router');
const { adminRouter } = require('./router/admin.router');

const corsConfig = {
    origin: allowedOrigin,
};

const app = express();


app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors(corsConfig));


authRouter(app);
adminRouter(app);
heartbeatRouter(app)
customerRouter(app)

app.use(apiErrorHandler);// this line always last line.


module.exports = app;