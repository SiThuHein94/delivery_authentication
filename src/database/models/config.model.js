module.exports = (sequelize, Sequelize) => {
  const Config = sequelize.define("config", {
    name: {
      field: "name",
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    count: {
      field: "config_count",
      type: Sequelize.STRING(50),
      allowNull: false
    }

  });


  return Config;
};