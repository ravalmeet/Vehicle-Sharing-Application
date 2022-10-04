import ProfileModel from "../models/profileModel.js";

export const profiles = async (req, res) => {
  console.log(req);
  const userData = await User.findOne({ email: req.body.email });
  const newProfile = new ProfileModel({
    email: req.body.email,
    profile: req.file.filename,
  });
  try {
    if (userData) {
      const userProfile = await newProfile.save();
      res.status(200).send({ success: true, data: userProfile });
    } else {
      res.status(200).send({ success: false, msg: "User doesn't exists" });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};
