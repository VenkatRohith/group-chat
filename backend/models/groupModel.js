const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    groupId: { type: mongoose.ObjectId, auto: true },
    groupName: { type: String, required: true },
    createdBy: { type: String, required: true },
    members: { type: [String], required: true },
  },
  { timestamps: true, _id: false }
);

module.exports = mongoose.model("Group", groupSchema);
