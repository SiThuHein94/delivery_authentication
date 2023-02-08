module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define("city", {
    cityCode: {
      field: "city_code",
      type: Sequelize.STRING(5),
      allowNull: false,
      unique: true
    },
    name: {
      field: "name",
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  });

  return City;
};