const { successResponse } = require("../config/response");
const { adminUserAuthLogin } = require("../services/auth.service")

const adminLogin = async (req, res, next) => {
  try {
    const { adminId, password } = req.body
    const data = await adminUserAuthLogin(adminId, password)
    res.status(200).send(successResponse(data))
  } catch (err) {
    next(err);
  }
};

module.exports = { adminLogin };
