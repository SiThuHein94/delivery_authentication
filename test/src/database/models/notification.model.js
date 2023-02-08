const gateModel = require("./gate.model");

module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define("notification", {
    message: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    employee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'employees', 
        key: 'id', 
     }
    },
    gate_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'gates',
        key: 'id', 
     }
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  });

  return Notification;
};
