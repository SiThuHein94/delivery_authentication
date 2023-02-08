const { successResponse } = require("../config/response");
const { adminUserAuthLogin } = require("../services/auth.service")

const adminLogin = async (req, res, next) => {
  try {
    const { loginId, password } = req.body
    const data = await adminUserAuthLogin(loginId, password)
    res.status(200).send(successResponse(data))
  } catch (err) {
    next(err);
  }
};

module.exports = { adminLogin };
