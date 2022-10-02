import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isHost: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    availableSeats : { type : Number , default : 0 },
    groupID : { type : String},
    
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
