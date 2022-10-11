import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    image: {
      type: String,
      default: "",
    },
    // latitude: { type: String, default: "" },
    // longitude: { type: String, default: "" },
    journeyTime: { type: String, default: "" },
    district: { type: String, default: "" },
    area: { type: String, default: "" },
    isHost: { type: Boolean, required: true },
    isVerified: { type: Boolean, required: true }, // for email verification
    token: { type: String, default: "" },
    totalSeats: { type: String, default: "" },
    availableSeats: { type: String, default: 0 },
    isDLVerified: { type: Boolean, default: false }, // for driving licence verification
    // groupID: { type: String },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
