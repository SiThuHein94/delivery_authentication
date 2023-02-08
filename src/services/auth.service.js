const ApiError = require("../config/customError.config");
const { WRONG_PASSWORD_ERROR, USER_NOT_FOUND_ERROR, ACCOUNT_HAS_LOCKED_ERROR, LOGIN_TIME_WARNING } = require("../config/errorMessage.config");
const { generateToken } = require('../util/generateToken');
const { findOneByLoginId, increaseLoginFailCount, saveAdmin, } = require('../database/providers/admin.provider');
const db = require("../database/models");
const AdminModel = db.admin;

const adminUserAuthLogin = async (loginId, password) => {
    // await saveAdmin('abc',password)
    let admin = await findOneByLoginId(loginId);

    if (!admin) {
        throw ApiError.badRequestError(USER_NOT_FOUND_ERROR);
    }

    const match = await admin.validPassword(password);
    const { accountStatus, loginFailCount } = admin.dataValues

    if (accountStatus === 'Locked') {
        throw ApiError.unauthorizedError(ACCOUNT_HAS_LOCKED_ERROR)
    }

    if (!match && loginFailCount < 2) {
        await AdminModel.update(
            {
                loginFailCount: loginFailCount + 1,
            },
            {
                where: { loginId: loginId },
            })
        throw ApiError.badRequestError(WRONG_PASSWORD_ERROR);
    }
    else if (!match && loginFailCount === 2) {
        await AdminModel.update(
            {
                loginFailCount: loginFailCount + 1,
            },
            {
                where: { loginId: loginId },
            })
        throw ApiError.unauthorizedError(LOGIN_TIME_WARNING);
    }
    else if (!match && loginFailCount === 3) {
        await AdminModel.update(
            {
                accountStatus: 'Locked',
            },
            {
                where: { loginId: loginId },
            })
        throw ApiError.unauthorizedError(ACCOUNT_HAS_LOCKED_ERROR)
    }

    await AdminModel.update(
        {
            loginFailCount: 0
        },
        {
            where: { loginId: loginId },
        }
    )
    const accessToken = await generateToken(
        admin.dataValues.loginId
    );

    return { accessToken };
}
module.exports = {
    adminUserAuthLogin
}