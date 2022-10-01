import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const config = require("../config/config")
// import config from "../config/config";

// Method for generating session token for active user
const create_token = async (id) => {
  try {
    const token = await jwt.sign({ _id: id }, config.secret_jwt);
    return token;
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// Method for generating secure Password
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Register new user
export const registerUser = async (req, res) => {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPass = await bcrypt.hash(req.body.password, salt);

  // // change password
  // req.body.password = hashedPass;

  // const newUser = new UserModel(req.body);

  // const { email } = req.body;
  const spassword = await securePassword(req.body.password);

  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: spassword,
    phoneNumber: req.body.phoneNumber,
    profilePic: req.file.filename,
    isHost: req.body.isHost,
  });

  try {
    const userData = await UserModel.findOne({ email: req.body.email });
    if (userData) {
      res.status(200).send({ success: false, msg: "User already exists" });
    }
    // if (userData)
    //   return res.status(400).json({ message: "User already exists" });

    if (
      req.body.password !== req.body.conformPassword &&
      req.body.password > 6
    ) {
      return res.status(200).send({
        success: false,
        msg: "Password Must be same and have more than 6 characters",
      });
    } else {
      const userdata = await newUser.save();
      res.status(200).send({ success: true, data: userdata });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Login a User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (validity) {
        const tokenData = await create_token(user._id);
        const userResult = {
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          profilePic: user.profilePic,
          phoneNumber: user.phoneNumber,
          isHost: user.isHost,
          token: tokenData,
        };
        const response = {
          seccess: true,
          msg: "User Details",
          data: userResult,
        };
        res.status(200).send(response);
      }
      else {
        res.status(200).send({ success: false, msg: "wrong password" });
      }
    } else {
      res.status(200).send({ success: false, msg: "User not found" });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
