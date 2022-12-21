const mongoose = require("mongoose");
const Group = require("../models/groupModel");
const User = require("../models/userModel");
const Message = require("../models/messageModel");

const createGroup = async (req, res) => {
  try {
    const { userId = "" } = req.currentLoggedUser;
    const group = await Group.createGroup({ ...req.body, createdBy: userId });
    res.status(200).json({ groupName: group.groupName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const { groupId = "" } = req.params;
    if (!mongoose.Types.ObjectId.isValid(groupId)) {
      return res.status(400).json({ error: "No such group" });
    }
    const group = await Group.findByIdAndDelete({ _id: groupId });

    //delete all messages in a group
    const messagesDeleted = await Message.deleteMany({ groupId });

    if (!group || !messagesDeleted)
      return res.status(400).json({ error: "No such group" });
    res.status(200).json({ groupName: group.groupName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const searchUserInGroup = async (req, res) => {
  try {
    const { groupId = "", searchValue = "" } = req.params;

    if (!mongoose.Types.ObjectId.isValid(groupId)) {
      return res.status(400).json({ error: "No such group" });
    }

    if (!searchValue || searchValue.trim() === "") {
      return res.status(400).json({ error: "Please search with valid value" });
    }
    const group = await Group.findById({ _id: groupId });
    if (group) {
      const groupMembers = await User.find({ _id: { $in: group.members } });
      const memberFound = await groupMembers.find((member) => {
        const { phoneNumber = "", firstName = "", lastName = "" } = member;
        if (
          phoneNumber === searchValue ||
          firstName.toLowerCase() === searchValue.toLowerCase() ||
          lastName.toLowerCase() === searchValue.toLowerCase()
        ) {
          return true;
        }
        return false;
      });
      if (memberFound) return res.status(200).json({ user: memberFound });
      return res.status(400).json({ message: "No such user in group" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addUserToGroup = async (req, res) => {
  try {
    const { groupId = "", userId = "" } = req.params;
    if (!mongoose.Types.ObjectId.isValid(groupId)) {
      return res.status(400).json({ error: "No such group" });
    }

    if (!userId || userId.trim() === "") {
      return res.status(400).json({ error: "Invalid User Details" });
    }

    const isUserPresent = await User.findById({ _id: userId });
    if (!isUserPresent) {
      return res.status(400).json({ error: "Invalid User Details" });
    }

    const group = await Group.findById({ _id: groupId });

    if (group.members.find((member) => member === userId)) {
      return res.status(400).json({ error: "User already present in group" });
    }

    await Group.findByIdAndUpdate(
      { _id: groupId },
      { members: [...group.members, userId] }
    );
    res
      .status(200)
      .json({ userName: isUserPresent.firstName, groupName: group.groupName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createGroup,
  deleteGroup,
  searchUserInGroup,
  addUserToGroup,
};
