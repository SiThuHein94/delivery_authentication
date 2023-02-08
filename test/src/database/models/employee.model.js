module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    gate_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'gates', 
        key: 'id', 
     }
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'roles', 
          key: 'id', 
       }
      },
    phone_number: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique:true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    one_time_password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    expire_time: {
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
  });
  return Employee;
};
