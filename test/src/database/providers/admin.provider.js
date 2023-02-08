const db = require("../models");
const AdminModel = db.admin;

const findOneByLoginId = async (loginId) => {
  return await AdminModel.findOne({
    where: { loginId },
  });
};

const findOneByPhoneNumber = async (phoneNumber) => {
  return await AdminModel.findOne({
    where: { phoneNumber }
  });
};

const saveAdmin = async (name, loginId, phoneNumber, password) => {
  const admin = AdminModel.build({
    name,
    loginId,
    password,
    phoneNumber,
  });

  return await admin.save();
};

module.exports = {
  findOneByLoginId,
  findOneByPhoneNumber,
  saveAdmin,
};
