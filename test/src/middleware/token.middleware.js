const jwt = require('jsonwebtoken');
const {
    UNAUTHORIZED_REQUEST_ERROR
} = require('../config/errorMessage.config');
const {
    errorResponse
} = require('../config/response');
const { findOneByLoginId } = require("../database/providers/admin.provider")
const { decrypt } = require("../util/crypto")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId;

        const admin = await findOneByLoginId(decrypt(userId));
        if (!admin) {
            return res.status(200).contentType('application/problem+json').send(errorResponse(UNAUTHORIZED_REQUEST_ERROR));
        } else {
            next();
        }
    } catch (err) {
        console.log({ err })
        return res.status(401).contentType('application/problem+json').send(errorResponse("User Need to login again!"));
    }
};