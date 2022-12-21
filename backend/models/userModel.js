const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const UserCredential = require("./userCredentialModel");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    phoneNumber: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.statics.createUser = async function (userDetails = {}) {
  const {
    phoneNumber = "",
    firstName = "",
    lastName = "",
    isAdmin = false,
    password = "",
  } = userDetails;
  if (!phoneNumber || !firstName || !lastName || !password) {
    throw Error("All required fields must be filled");
  }

  if (!validator.isMobilePhone(phoneNumber, "en-IN")) {
    throw Error("Phone Number is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const phoneExists = await this.findOne({ phoneNumber });

  if (phoneExists) {
    throw Error("Phone Number is already resgistered, please login");
  }

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    phoneNumber,
    firstName,
    lastName,
    isAdmin,
  });

  const userLoginData = {
    userId: user._id,
    password: hash,
    phoneNumber: user.phoneNumber,
  };

  await UserCredential.create(userLoginData);

  return user;
};

module.exports = mongoose.model("User", userSchema);
