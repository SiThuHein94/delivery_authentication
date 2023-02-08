const bcrypt = require("bcryptjs")
const ApiError = require("../config/customError.config");
const { WRONG_PASSWORD_ERROR, USER_NOT_FOUND_ERROR } = require("../config/errorMessage.config");
const { generateToken } = require('../util/generateToken');
const { findOneByLoginId, saveAdmin } = require('../database/providers/admin.provider');


const adminUserAuthLogin = async (adminId, password) => {
    // await saveAdmin('abc',password)
    const admin = await findOneByLoginId(adminId);
    if (!admin) {
        throw ApiError.badRequestError(USER_NOT_FOUND_ERROR);
    }

    const match = await admin.validPassword(password);

    if (!match) {
        throw ApiError.badRequestError(WRONG_PASSWORD_ERROR);
    }
    const accessToken = await generateToken(
        admin.dataValues.adminId
    );

    return { accessToken };
}
module.exports = {
    adminUserAuthLogin
}