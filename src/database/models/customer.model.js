module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    phoneNumber: {
      field: "phone_number",
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
    },
    oneTimePassword: {
      field: "one_time_password",
      type: Sequelize.STRING(255),
    },
    expireTime: {
      field: "expire_time",
      type: Sequelize.DATE,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    userLevel: {
      field: "user_level",
      type: Sequelize.INTEGER,
    },
    point: {
      type: Sequelize.INTEGER,
    },
    accountStatus: {
      field: "account_status", //Lock or Active
      type: Sequelize.STRING(255),
      allowNull: false,
      default: 'Active'
    },
    loginFailCount: {
      field: "login_fail_count", // >=3
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 0
    }
  });
  return Customer;
};
