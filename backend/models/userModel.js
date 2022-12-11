const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userId: { type: mongoose.ObjectId, auto: true },
    phoneNumber: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true, _id: false }
);

module.exports = mongoose.model("User", userSchema);
