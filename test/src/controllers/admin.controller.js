const { successResponse } = require("../config/response");
const { adminUserCreate } = require("../services/admin.service");

const adminCreate = async (req, res, next) => {
    try {
      const { name, loginId, phoneNumber, password } = req.body;
      const data = await adminUserCreate(name,loginId,phoneNumber,password);
      res.status(200).send(successResponse(data));
    } catch (err) {
      next(err);
    }
};


module.exports = { adminCreate };