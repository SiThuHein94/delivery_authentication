module.exports = (sequelize, Sequelize) => {
  const Route = sequelize.define("route", {
    sender_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "customers",
        key: "id",
      },
    },
    receiver_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "customers",
        key: "id",
      },
    },
    from: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    destination: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  });

  return Route;
};
