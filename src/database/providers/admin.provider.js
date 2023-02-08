const ApiError = require("../../config/customError.config");
const { ACCOUNT_HAS_LOCKED_ERROR } = require("../../config/errorMessage.config");
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

const saveAdmin = async (name, adminId, password, phoneNumber) => {
  const admin = AdminModel.build({
    name,
    adminId,
    password,
    phoneNumber,
    accountStatus: 'Active',
    loginFailCount: 0
  });

  return await admin.save();
};

const increaseLoginFailCount = async (userData) => {
  if (userData.loginFailCount < 2) {
    return await AdminModel.update(
      {
        loginFailCount: userData.loginFailCount + 1,
      },
      {
        where: { loginId: userData.loginId },
      }
    );
  }
  else {
    return await AdminModel.update(
      {
        accountStatus: 'Locked',
      },
      {
        where: { loginId: userData.loginId },
      
      }
    )
  }
}

module.exports = {
  findOneByLoginId,
  findOneByPhoneNumber,
  saveAdmin,
  increaseLoginFailCount
};
