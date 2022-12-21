const User = require("../models/userModel");

const isUserAdmin = async (req, res, next) => {
  try {
    const { userId = "" } = req.currentLoggedUser || {};
    if (!userId) {
      throw Error();
    }
    const user = await User.findById({ _id: userId });
    if (!user.isAdmin) {
      return res.status(403).json({
        error: "Current User doesn't have permission to create or edit user",
      });
    }
    next();
  } catch (error) {
    res.status(400).json({ error: "Some error occured" });
  }
};

module.exports = isUserAdmin;
