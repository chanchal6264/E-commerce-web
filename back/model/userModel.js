const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },

});

userSchema.pre("save", async function (next) {
  try {
    const saltRound = 10;
    const hasedPassword = await bcrypt.hash(this.password, saltRound);
    const hasePassword = await bcrypt.hash(this.cpassword, saltRound);
    this.password = hasedPassword;
    this.cpassword = hasePassword;
    next();
  } catch (err) {
    next(err);
  }
});

exports.user = mongoose.model("user", userSchema);
