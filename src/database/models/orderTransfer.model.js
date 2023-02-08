module.exports = (sequelize, Sequelize) => {
  //Update start when order receive and transfer
  const OrderTransfer = sequelize.define("order_transfer", {
    employee_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "employees",
        key: "id",
      },
    },
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "id",
      },
    },
  });

  return OrderTransfer;
};
