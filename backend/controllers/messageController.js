const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
  try {
    const { userId } = req.currentLoggedUser;
    const { groupId = "", messageDesc = "" } = req.body;

    if (!groupId || groupId.trim() === "") {
      return res.status(400).json({ error: "Failed to send message" });
    }

    if (!messageDesc) {
      return res.status(400).json({ error: "Please provide a valid message" });
    }

    const message = await Message.create({
      groupId,
      createdBy: userId,
      messageDesc,
    });

    if (!message) {
      return res.status(400).json({ error: "Failed to send message" });
    }
    res.status(201).json();
  } catch (error) {
    res.status(400).json({ error: "Failed to send message" });
  }
};

const likeMessage = async (req, res) => {
  try {
    const { userId = "" } = req.currentLoggedUser;
    const { messageId = "" } = req.params;
    if (!messageId || messageId.trim() === "") {
      return res.status(400).json({ error: "Failed to like message" });
    }
    const message = await Message.findById({ _id: messageId });
    if (!message) {
      return res.status(400).json({ error: "Failed to like message" });
    }
    const liked = await Message.findByIdAndUpdate(
      { _id: messageId },
      {
        likedBy: [...message.likedBy, userId],
      }
    );
    if (!liked) {
      return res.status(400).json({ error: "Failed to like message" });
    }
    res.status(201);
  } catch (error) {
    res.status(400).json({ error: "Failed to like message" });
  }
};

module.exports = { sendMessage, likeMessage };
