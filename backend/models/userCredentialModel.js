const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenUtils");

const Schema = mongoose.Schema;

const userCredentialSchema = new Schema(
  {
    userId: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    loggedInAt: { type: Date },
    loggedOutAt: { type: Date },
  },
  { timestamps: true }
);

userCredentialSchema.statics.login = async function (phoneNumber, password) {
  if (!phoneNumber || !password) {
    throw Error("All required fields must be filled");
  }

  if (!validator.isMobilePhone(phoneNumber, "en-IN")) {
    throw Error("Invalid Credentials");
  }

  const userLoginDetails = await this.findOne({ phoneNumber });

  if (!userLoginDetails) {
    throw Error("Invalid Credentials");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    userLoginDetails.password
  );

  if (!passwordMatch) {
    throw Error("Invalid Credentials");
  }

  const token = createToken({ userId: userLoginDetails.userId });
  if (token) {
    const loggedInAt = Date.now();
    await this.findOneAndUpdate({ phoneNumber }, { loggedInAt });
  }

  return token;
};

userCredentialSchema.statics.logout = async function (phoneNumber, token) {
  if (!phoneNumber) {
    throw Error("Please pass phoneNumber field");
  }

  if (!token) {
    throw Error("Some error occured, please contact Admin");
  }

  const userLoginDetails = await this.findOne({ phoneNumber });

  if (!userLoginDetails) {
    throw Error("User not found");
  }

  const loggedOutAt = Date.now();
  await this.findOneAndUpdate({ phoneNumber }, { loggedOutAt });

  return userLoginDetails;
};

module.exports = mongoose.model("UserCredential", userCredentialSchema);
