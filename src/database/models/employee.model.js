module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    gateId: {
      field: "gate_id",
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'gates',
        key: 'id',
      }
    },
    roleId: {
      field: "role_id",
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id',
      }
    },
    phoneNumber: {
      field: "phone_number",
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    oneTimePassword: {
      field: "one_time_password",
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    expireTime: {
      field: "expire_time",
      type: Sequelize.DATE,
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    position: {
      type: Sequelize.STRING(255),
      allowNull: false,
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
  return Employee;
};
