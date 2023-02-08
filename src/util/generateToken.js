const jwt = require("jsonwebtoken");
const { encrypt } = require("../util/crypto");

const generateToken = async (userData) => {
  return await jwt.sign(
    { adminId: encrypt(userData) },
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXP_TIME }
  );
};
module.exports = {
  generateToken,
};
