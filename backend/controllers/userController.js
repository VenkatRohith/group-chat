const mongoose = require("mongoose");
const User = require("../models/userModel");
const UserCredential = require("../models/userCredentialModel");

const createUser = async (req, res) => {
  try {
    const user = await User.createUser(req.body);

    res.status(200).json({ firstName: user.firstName });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Some error occured, please contact to support team" });
  }
};

const editUser = async (req, res) => {
  try {
    const { userId = "" } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "No such user" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ error: "No such user" });
    }

    if (req.body?.phoneNumber) {
      await UserCredential.findOneAndUpdate({
        phoneNumber: updatedUser.phoneNumber,
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Some error occured, please contact to support team" });
  }
};

const getUsers = async (_, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Some error occured, please contact to support team" });
  }
};

module.exports = { createUser, editUser, getUsers };
