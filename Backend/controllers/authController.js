import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

// Register new user
export const registerUser = async (req, res) => {
 
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  // change password
  req.body.password = hashedPass;

  const newUser = new UserModel(req.body);

  const { email } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    if (
      req.body.password !== req.body.conformPassword &&
      req.body.password > 6
    ) {
      return res
        .status(400)
        .json({
          message: "Password Must be same and have more than 6 characters",
        });
    }

    const userdata = await newUser.save();

    res.status(200).json({ userdata: userdata });

  }  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login a User
export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await UserModel.findOne({ email });

    if (user) {

      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        res.status(200).json({ user });
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
