const db = require("../models");
const AdminModel = db.adminLogin;

const findOneByLoginId = async (loginId) => {
  return await AdminModel.findOne({
    where: { adminId:loginId },
  });
};

const findOneByPhoneNumber = async (phoneNumber) => {
  return await AdminModel.findOne({
    where: { phoneNumber }
  });
};

const saveAdmin = async ( adminId, password) => {
  const admin = AdminModel.build({
    // name,
    adminId,
    password,
    // phoneNumber,
  });

  return await admin.save();
};

module.exports = {
  findOneByLoginId,
  findOneByPhoneNumber,
  saveAdmin,
};
