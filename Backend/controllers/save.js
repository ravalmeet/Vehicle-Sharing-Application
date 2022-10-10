import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import randomstring from "randomstring";
import nodemailer from "nodemailer";
import districtUserRoute from "../routes/districtUserRoute.js";
import DistrictUserModel from "../models/districtUserModel.js";
import UserOTPVerifyModel from "../models/userOTPVerify.js";

// method for sending reset-password mail to user
const sendResetPasswordMail = async (mailOptions) => {
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
  const spassword = await securePassword(req.body.password);

  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: spassword,
    confirmPassword: spassword,
    phoneNumber: req.body.phoneNumber,
    // image: req.file.filename,
    isHost: req.body.isHost,
    isVerified: false,
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
      const userdata = await newUser.save().then((result) => {
        sendOTPVerificationEmail(result, res);
      });
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

      const userData = await UserModel.findByIdAndUpdate(
        { _id: user_id },
        {
          $set: {
            password: newPassword,
            confirmPassword: newPassword,
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
      const mailOptions = {
        from: config.emailUser,
        to: email,
        subject: "Reset Password",
        html:
          "<p> Hii " +
          userData.name +
          ', Please copy the link <a href = "http://localhost:3000/api/reset-password?token=' +
          randomString +
          '"> and reset your password<a/>',
      };
      sendResetPasswordMail(mailOptions);
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

      const userData = await User.findByIdAndUpdate(
        { _id: tokenData._id },
        {
          $set: {
            password: newPassword,
            confirmPassword: newPassword,
            token: "",
          },
        },
        { new: true }
      );

      res.status(200).send({
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
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const add_profile = async (req, res) => {
  console.log(req);
  const email = req.body.email;

  console.log(image);
  try {
    const userData = await UserModel.findOne({ email: email });
    if (userData) {
      const data = await UserModel.updateOne(
        { email: email },
        { $set: { image: req.file.filename } }
      );

      res.status(200).send({ success: true, msg: "Profile set!! " });
    } else {
      res.status(200).send({ success: false, msg: "User doesn't exists" });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const update_profile = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPhone = req.body.phoneNumber;
    const newProfilePic = req.file.filename;

    const data = await UserModel.findOne({ id: user_id });

    if (data) {
      const userData = await UserModel.findByIdAndUpdate(
        { _id: user_id },
        {
          $set: {
            name: newName,
            email: newEmail,
            phoneNumber: newPhone,
            profilePic: newProfilePic,
          },
        }
      );

      res
        .status(200)
        .send({ success: true, msg: "Your profile has been updated" });
    } else {
      res.status(200).send({ success: false, msg: "User Id not found!!" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const add_location = async (req, res) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const journeyTime = req.body.journeyTime;
  const email = req.body.email;
  console.log(req);

  try {
    const userData = await UserModel.findOne({ email: email });
    if (userData) {
      const data = await UserModel.updateOne(
        { email: email },
        {
          $set: {
            latitude: latitude,
            longitude: longitude,
            journeyTime: journeyTime,
          },
        }
      );

      res.status(200).send({
        success: true,
        msg: "Location added successfully!! ",
      });
    } else {
      res.status(200).send({ success: false, msg: "User doesn't exists" });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const add_areaDistrict = async (req, res) => {
  const district = req.body.district;
  const area = req.body.area;
  const journeyTime = req.body.journeyTime;
  const email = req.body.email;
  const area12 = req.body.area;
  try {
    const userData = await UserModel.findOne({ email: email });
    if (userData) {
      const data = await UserModel.updateOne(
        { email: email },
        {
          $set: {
            district: district,
            area: area,
            journeyTime: journeyTime,
          },
        }
      );

      const result = await DistrictUserModel.findOne({
        "district.districtName": district,
      });

      // const dataDistric = result.district.districtName;
      let users = [];
      if (result) {
        const district = result.district.toJSON();
        const areas = district.areas;
        // console.log(areas);
        areas.forEach((area) => {
          let area1 = String(area.areaName).trim().toLowerCase();
          let area2 = area12.toLowerCase().trim();
          //  console.log(area1,area2);
          if (area1 == area2) {
            users = area.coordinates;
            users.push(email);
          }
        });
      }
      console.log(users);
      const data1 = await DistrictUserModel.updateOne(
        { "district.areas.areaName": area12 },
        {
          $set: {
            district: {
              areas: {
                coordinates: users,
              },
            },
          },
        }
      );
      // console.log(users);

      res.status(200).send({
        success: true,
        msg: "District and Area added successfully!! ",
        users: users,
      });
    } else {
      res.status(200).send({ success: false, msg: "User doesn't exists" });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const host_details = async (req, res) => {
  const district = req.body.district;
  const area = req.body.area;
  const journeyTime = req.body.journeyTime;
  const email = req.body.email;
  const totalSeats = req.body.totalSeats;

  try {
    const userData = await UserModel.findOne({ email: email });
    if (userData) {
      const data = await UserModel.updateOne(
        { email: email },
        {
          $set: {
            district: district,
            area: area,
            journeyTime: journeyTime,
            totalSeats: totalSeats,
          },
        }
      );

      res.status(200).send({
        success: true,
        msg: "Hello Host, District and Area added successfully!! ",
      });
    } else {
      res.status(200).send({ success: false, msg: "User doesn't exists" });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const sendOTPVerificationEmail = async ({ _id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const mailOptions = {
      from: config.emailUser,
      to: email,
      subject: "Verify Your Email",
      html: ` <p> Enter <b> ${otp} </b> in the app to verify your email address and complete the verification. This code <b>expires in 1 hour</b>. </p>`,
    };
    const hashedOTP = securePassword(otp);
    const newOTPVerification = await new UserOTPVerifyModel({
      userId: _id,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    const userOTP = await newOTPVerification.save();
    sendResetPasswordMail(mailOptions);
    res.status(200).send({ success: true, msg:"Verification otp email sent", data: {
      user_id:_id,
      email,
    } });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

export const group_details = async (req, res) => {};
