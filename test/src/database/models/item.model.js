module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    item_type: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    weight_kg: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    volume: {
      type: Sequelize.STRING(50),
    },
    img_url: {
      type: Sequelize.STRING(255),
    },
    remark: {
      type: Sequelize.STRING(255),
    },
  });
  return Item;
};
