const User = require("../models/userModel");

const isUserAdmin = async (req, res, next) => {
  try {
    const { phoneNumber = "" } = req.currentLoggedUser || {};
    if (!phoneNumber) {
      throw Error();
    }
    const user = await User.findOne({ phoneNumber });
    if (!user.isAdmin) {
      return res.status(403).json({
        error: "User doesn't permission to create or edit other user",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Some error occured" });
  }
};

module.exports = isUserAdmin;
