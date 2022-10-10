import mongoose from "mongoose";

const UserOTPVerify = new mongoose.Schema(
  {
    email:{type:String,},
    otp:{type:String},
    createdAt:{type:Date},
    expiresAt:{type:Date}
  },
  { timestamps: true }
);

const UserOTPVerifyModel = mongoose.model("UserOTPVerification", UserOTPVerify);
export default UserOTPVerifyModel; 
