const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    maxLength: 15,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email id is not valid");
      }
    },
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
