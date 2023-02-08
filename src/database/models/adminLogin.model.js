const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const AdminLogin = sequelize.define("admin_login", {
        adminId: {
            field: "admin_id",
            type: Sequelize.STRING(100),
            allowNull: false,
            references: {
                model: 'admins',
                key: 'id',
            }
        },
        password: {
            field: "password",
            type: Sequelize.STRING(255),
            allowNull: false
        }

    }
    );
    AdminLogin.beforeCreate(async (admin, options) => {
        const hashedPassword = await bcrypt.hash(admin.password, bcrypt.genSaltSync(8));;
        admin.password = hashedPassword;
    });


    AdminLogin.prototype.validPassword = function (password) {
        return bcrypt.compare(password, this.password);
    }
    return AdminLogin;
};