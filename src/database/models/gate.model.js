module.exports = (sequelize, Sequelize) => {
    const Gate = sequelize.define("gate", {
        name: {
            type: Sequelize.STRING(50),
            allowNull:false,
        },
        city: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        phone_number: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        address: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }
    );
  
    return Gate;
};
