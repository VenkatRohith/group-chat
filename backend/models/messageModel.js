const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    messageDesc: { type: String, required: true },
    createdBy: { type: String, required: true },
    groupId: { type: String, required: true },
    likedBy: { type: [String] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
