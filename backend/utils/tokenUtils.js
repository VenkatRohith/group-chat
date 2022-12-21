const jwt = require("jsonwebtoken");
const { secret, token_expiry_in_hours } = require("../env-variables");

const createToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: `${token_expiry_in_hours}h` });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { createToken, verifyToken };
