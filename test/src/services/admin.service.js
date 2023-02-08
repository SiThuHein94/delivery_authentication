const bcrypt = require("bcryptjs")
const ApiError = require("../config/customError.config");
const { ID_ALREADY_USED_ERROR, PHONE_NUMBER_ALREADY_USED_ERROR } = require("../config/errorMessage.config");
const { saveAdmin, findOneByLoginId, findOneByPhoneNumber } = require('../database/providers/admin.provider');

const adminUserCreate = async (name, loginId, phoneNumber, password) => {
    
    const idExist = await findOneByLoginId(loginId);
    const phoneNumberExist = await findOneByPhoneNumber(phoneNumber);

    if (idExist) {
        throw ApiError.badRequestError(ID_ALREADY_USED_ERROR);
    } else if(phoneNumberExist) {
        throw ApiError.badRequestError(PHONE_NUMBER_ALREADY_USED_ERROR);
    } else {
        const admin = await saveAdmin(name, loginId, phoneNumber, password);
        return { ...admin.toResponse };

    }
}

module.exports = {
    adminUserCreate,
}