module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define("expense", {
        description: {
            type: Sequelize.STRING(50),
            allowNull:false,
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        employee_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'employees', 
                key: 'id', 
             }
        },
        gate_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
    );
  
    return Expense;
};
