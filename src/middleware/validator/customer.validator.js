const ApiError = require('../../config/customError.config');
const {
    errorResponse,
} = require('../../config/response');
const {
    customerValidationModel
} = require('../validateModel/customer.validation');
const customerValidator = async (req, res, next) => {
    try {
        await customerValidationModel.validateAsync(req.body);
        next();
    } catch (error) {
        const apiHandler = ApiError.badRequestError(error);
        return res.status(apiHandler.status).contentType(apiHandler.contentType).send(errorResponse(apiHandler));
    }
};

module.exports = { customerValidator }