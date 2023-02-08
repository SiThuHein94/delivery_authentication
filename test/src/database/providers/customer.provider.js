const db = require("../models");
const CustomerModel = db.customer;
const findOneByPhoneNumber = async (phoneNumber) => {
  return await CustomerModel.findOne({
    where: { phone_number: phoneNumber },
  });
};
const saveCustomer = async (name, password, phone_number, address) => {
  const user = CustomerModel.build({
    name: name,
    password: password,
    phone_number: phone_number,
    address: address,
    user_level: 1,
    point: 0
  });

  return await user.save();
};

const getCustomer = async (userId) => {
  return await CustomerModel.findOne({
    where: { id: userId },
  });
}

module.exports = {
  findOneByPhoneNumber,
  saveCustomer,
  getCustomer
};