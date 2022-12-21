const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    groupName: { type: String, required: true },
    createdBy: { type: String, required: true },
    members: { type: [String], required: true },
  },
  { timestamps: true }
);

groupSchema.statics.createGroup = async function (groupDetails = {}) {
  const { groupName = "", members = [], createdBy = "" } = groupDetails;
  if (!groupName || groupName.trim() === "") {
    throw Error("Invalid Group name");
  }

  if (members.length === 0) {
    throw Error("Please provide atleast one user to create group");
  }

  const group = await this.create({
    groupName,
    members: [...members, createdBy],
    createdBy,
  });

  return group;
};

module.exports = mongoose.model("Group", groupSchema);
