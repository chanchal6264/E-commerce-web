const userModel = require("../model/userModel");
const user = userModel.user;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Signup
exports.signup = async (req, res) => {
  try {
    const data = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.cpassword,
    });
    const { name, email, password, cpassword } = req.body;
    if (!name) {
      return res.json({
        success: 0,
        message: "Please Enter the user Name.",
      });
    }
    if (!email) {
      return res.json({
        success: 0,
        message: "Please Enter the user Email.",
      });
    }
    if (!password) {
      return res.json({
        success: 0,
        message: "Please Enter the user Password.",
      });
    }
    if (!cpassword) {
      return res.json({
        success: 0,
        message: "Please Enter the user Cpassword",
      });
    }
    const existingUser = await user.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({
        success: 0,
        message: "Please enter the another mail this maill is used.",
      });
    }
    if (req.body.password === req.body.cpassword) {
      const users = await new user(data).save();
      return res.send({
        success: 1,
        message: "User Register Successfully.",
        users,
      });
    } else {
      return res.json({
        success: 0,
        message: "Please Enter the both password same",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error in code.Please check the code for the registration.",
    });
  }
};

//Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      success: 0,
      message: "Please Enter the email or password.",
    });
  }
  const users = await user.findOne({ email: req.body.email });
  if (users) {
    const isMatch = await bcrypt.compare(password, users.password);
    if (isMatch) {
      return res.json({
        success: 1,
        message: "Login Successfully.",
        users,
      });
    } else {
      return res.json({
        success: 1,
        message: "Password is worng",
      });
    }
  } else {
    return res.json({
      success: 0,
      message: "Email id is not exist",
    });
  }
};

//Update
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await user.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ success: 1, message: "Data was updated.", data: result });
  } catch (error) {
    res.send({
      success: 0,
      message:
        "Email id is already used in another account please enter unique id.",
    });
  }
};

//Delete
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await user.deleteOne({ _id: id });
    if (result) {
      return res.json({
        success: 1,
        message: "Delete the userID.",
      });
    } else {
      return res.json({
        success: 0,
        message: "Data was not deleted.",
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in code.",
    });
  }
};

exports.userdata = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await user.findById({ _id: id });
    return res.json({
      message: "user by Id",
      result,
    });
  } catch (err) {
    return res.json({
      success: 0,
      message: "Error in code.",
    });
  }
};
