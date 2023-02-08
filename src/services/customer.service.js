const ApiError = require("../config/customError.config");
const { PHONE_NUMBER_ALREADY_USED_ERROR, USER_NOT_FOUND_ERROR } = require("../config/errorMessage.config");
const { generateToken } = require('../util/generateToken');
const { saveCustomer, findOneByPhoneNumber, getCustomer } = require("../database/providers/customer.provider");


const customerRegistrationService = async (name, password, phoneNumber, address) => {
    const customer = await findOneByPhoneNumber(phoneNumber);
    if (!customer) {
        saveCustomer(name, password, phoneNumber, address)
        return `Created User, ${name}`;
    }
    if (customer) {
        throw ApiError.badRequestError(PHONE_NUMBER_ALREADY_USED_ERROR);
    }
}

const getCustomerService = async (userId) => {
    const customer = await getCustomer(userId);

    if (customer) {
        return customer;
    }
    else{
        throw ApiError.notFoundError(USER_NOT_FOUND_ERROR);
    }
    
}

module.exports = {
    customerRegistrationService,
    getCustomerService
}