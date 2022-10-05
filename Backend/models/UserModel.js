import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
<<<<<<< HEAD
    confirmPassword: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
=======
    confirmPassword: { type: String, required: true },   
>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
    isHost: { type: Boolean, required: true },
    isVerified: { type: Boolean, required: true },
    token: { type: String, default: "" },
    // availableSeats: { type: Number, default: 0 },
    // groupID: { type: String },
<<<<<<< HEAD
  }
  // { timestamps: true }
=======
  },
   { timestamps: true }
>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
