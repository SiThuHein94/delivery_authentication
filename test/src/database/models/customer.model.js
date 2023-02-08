module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
    },
    one_time_password: {
      type: Sequelize.STRING(255),
    },
    expire_time: {
      type: Sequelize.DATE,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    user_level: {
      type: Sequelize.INTEGER,
    },
    point: {
      type: Sequelize.INTEGER,
    },
  });
  return Customer;
};
