const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userCredentialSchema = new Schema(
  {
    userId: { type: String, required: true },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
    },
  },
  { timestamps: true, _id: false }
);

module.exports = mongoose.model("UserCredential", userCredentialSchema);
