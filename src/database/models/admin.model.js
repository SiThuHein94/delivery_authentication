const bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        id: {
            field: "id",
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            field: "name",
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        loginId: {
            field: "login_id",
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            field: "phone_number",
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            field: "password",
            type: Sequelize.STRING(255),
            allowNull: false
        },
        accountStatus: {
            field: "account_status", //Lock or Active
            type: Sequelize.STRING(255),
            allowNull: false,
            default: 'Active'
        },
        loginFailCount: {
            field: "login_fail_count", // >=3
            type: Sequelize.INTEGER,
            allowNull: false,
            default: 0
        }
    }
    );

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
