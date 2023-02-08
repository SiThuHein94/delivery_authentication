const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin_login", {
        adminId: {
            field: "admin_id",
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        password: {
            field: "password",
            type: Sequelize.STRING(255),
            allowNull: false
        }

    }
    );
    Admin.beforeCreate(async (admin, options) => {
        const hashedPassword = await bcrypt.hash(admin.password, bcrypt.genSaltSync(8));;
        admin.password = hashedPassword;
    });

    Admin.prototype.toResponse = function () {
        return {
            name: this.name,
            phoneNumber: this.phoneNumber,
            loginId: this.loginId,
            createdAt: this.createdAt,
        };
    };
    Admin.prototype.validPassword = function (password) {
        return bcrypt.compare(password, this.password);
    }
    return Admin;
};