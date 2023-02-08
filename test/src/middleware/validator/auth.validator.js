const ApiError = require('../../config/customError.config');
const {
    errorResponse,
} = require('../../config/response');
const {
    authValidationModel
} = require('../validateModel/auth.validation');
const authValidator = async (req, res, next) => {
    try {
        await authValidationModel.validateAsync(req.body);
        next();
    } catch (error) {
        const apiHandler = ApiError.badRequestError(error);
        return res.status(apiHandler.status).contentType(apiHandler.contentType).send(errorResponse(apiHandler));
    }
};

module.exports = { authValidator }