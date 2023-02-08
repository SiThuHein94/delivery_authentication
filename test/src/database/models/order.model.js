module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    route_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "routes",
        key: "id",
      },
    },
    shipping_fee: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payment_method: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    expected_deli_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    item_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "items",
        key: "id",
      },
    },
    qr: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
  });

  return Order;
};
