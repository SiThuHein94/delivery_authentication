const fs = require('fs');
const path = require('path');
const Sequelize = require("Sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];
const db = {};

console.log('----------------------------',process.env)
console.log({config})
let sequelize;
if (config.use_env_variable) {
	console.log({config})
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const admin = require("./admin.model");
const adminLogin = require("./adminLogin.model");
const customer = require("./customer.model");
const configDb = require("./config.model");
const employee = require("./employee.model");
const expense = require("./expense.model");
const gate = require("./gate.model");
const notification = require("./notification.model");
const order = require("./order.model");
const orderLocation = require("./orderLocation.model");
const role = require("./role.model");
const item = require("./item.model");
const orderTransfer = require("./orderTransfer.model");
const route = require("./route.model");
const city = require("./city.model");

db.admin = admin(sequelize, Sequelize);
db.customer = customer(sequelize, Sequelize);
db.employee = employee(sequelize, Sequelize);
db.expense = expense(sequelize, Sequelize);
db.gate = gate(sequelize, Sequelize);
db.notification = notification(sequelize, Sequelize);
db.item = item(sequelize, Sequelize);
db.order = order(sequelize, Sequelize);
db.orderLocation = orderLocation(sequelize, Sequelize);
db.role = role(sequelize, Sequelize);
db.orderTransfer = orderTransfer(sequelize, Sequelize);
db.route = route(sequelize, Sequelize);
db.city = city(sequelize, Sequelize);
db.adminLogin = adminLogin(sequelize, Sequelize)
db.config = configDb(sequelize, Sequelize)

db.sequelize.sync().then(() => {
	db.config.create({
		name: 'ALLOWED_LOGIN_FAIL_COUNT',
		count: 3
	});
	db.config.create({
		name: 'ALLOWED_SAME_PASSWORD_COUNT',
		count: 3
	});
});

module.exports = db;
