const { successResponse } = require("../config/response")
const { customerRegistrationService, getCustomerService } = require("../services/customer.service")

const customerRegistration = async (req, res, next) => {
  try {
    const { name, password, phoneNumber, address } = req.body
    const data = await customerRegistrationService(name, password, phoneNumber, address)
    res.status(200).send(successResponse(data))
  } catch (err) {
    next(err);
  }
};

//to use in login route
const getCustomer = async (req, res, next) => {
  try {
    const { userId } = req.query
    const data = await getCustomerService(userId)
    res.status(200).send(successResponse(data))
  } catch (err) {
    next(err);
  }
};

module.exports = { customerRegistration, getCustomer };
