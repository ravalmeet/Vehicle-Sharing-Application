import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import randomstring from "randomstring";
import nodemailer from "nodemailer";

// method for sending reset-password mail to user
const sendResetPasswordMail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    });

    const mailOptions = {
      from: config.emailUser,
      to: email,
      subject: "Reset Password",
      html:
        "<p> Hii" +
        name +
        ', Please copy the link <a href = "http://localhost:3000/api/reset-password?token=' +
        token +
        '"> and reset your password<a/>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent:= ", info.response);
      }
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

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
  } catch {}
};

// Register new user
export const registerUser = async (req, res) => {
  // console.log(req);
  // // console.log(req.body.password + "Passwordd");
  // const salt = await bcrypt.genSalt(10);
  // const hashedPass = await bcrypt.hash(req.body.password, salt);

  // change password
  // req.body.password = hashedPass;

  // const newUser = new UserModel(req.body);

  // const { email } = req.body;
  const spassword = await securePassword(req.body.password);

  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: spassword,
    confirmPassword: spassword,
    phoneNumber: req.body.phoneNumber,
    // profilePic: req.file.filename,
    isHost: req.body.isHost,
    isVerified: req.body.isVerified,
  });

  try {
    const userData = await UserModel.findOne({ email: req.body.email });
    if (userData) {
      res.status(200).send({ success: false, msg: "User already exists" });
    } else if (
      req.body.password !== req.body.confirmPassword ||
      req.body.password > 6
    ) {
      res.status(200).send({
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
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (validity) {
        const tokenData = await create_token(user._id);
        const userResult = {
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          // profilePic: user.profilePic,
          phoneNumber: user.phoneNumber,
          isHost: user.isHost,
          isVerified: user.isVerified,
          token: tokenData,
        };
        const response = {
          seccess: true,
          msg: "User Details",
          data: userResult,
        };
        res.status(200).send(response);
      } else {
        res.status(200).send({ success: false, msg: "wrong password!! " });
      }
    } else {
      res.status(200).send({ success: false, msg: "User not found" });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

// update password
export const update_password = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const password = req.body.password;

    const data = await UserModel.findOne({ id: user_id });

    if (data) {
      const newPassword = await securePassword(password);
      const newConfirmPassword = await securePassword(password);
      const userData = await UserModel.findByIdAndUpdate(
        { _id: user_id },
        {
          $set: {
            password: newPassword,
            confirmPassword: newConfirmPassword,
          },
        }
      );

      res
        .status(200)
        .send({ success: true, msg: "Your password has been updated" });
    } else {
      res.status(200).send({ success: false, msg: "User Id not found!!" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const forgot_password = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await UserModel.findOne({ email: email });

    if (userData) {
      const randomString = randomstring.generate();
      const data = await UserModel.updateOne(
        { email: email },
        { $set: { token: randomString } }
      );
      sendResetPasswordMail(userData.name, userData.email, randomString);
      res.status(200).send({
        success: true,
        msg: "Please check your inbox and reset your password",
      });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "This email does not exists" });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

export const reset_password = async (req, res) => {
  try {
    const token = req.query.token;
    const tokenData = await UserModel.findOne({ token: token });
    if (tokenData) {
      const password = req.body.password;
      const newPassword = await securePassword(password);
      const newConfirmPassword = await securePassword(password);
      const userData = await User.findByIdAndUpdate(
        { _id: tokenData._id },
        {
          $set: {
            password: newPassword,
            confirmPassword: newConfirmPassword,
            token: "",
          },
        },
        { new: true }
      );
      res
        .status(200)
        .send({
          success: true,
          msg: "User password has been reset",
          data: userData,
        });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "This link has been expired" });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
