const UserCredential = require("../models/userCredentialModel");

const login = async (req, res) => {
  try {
    const { phoneNumber = "", password = "" } = req.body;
    const token = await UserCredential.login(phoneNumber, password);
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Some error occured, please contact to support team" });
  }
};

const logout = async (req, res) => {
  const { authorization = "" } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  try {
    const { phoneNumber = "" } = req.body;
    const [_, token = ""] = authorization.split(" ") || [];
    if (!token) {
      return res.status(401).json({ error: "Invalid Authorization token" });
    }
    await UserCredential.logout(phoneNumber, token);
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Some error occured, please contact to support team" });
  }
};

module.exports = { login, logout };
