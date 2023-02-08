module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique:true
    },
    role_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  });

  return Role;
};
