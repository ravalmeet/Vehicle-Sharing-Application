import UserModel from "../models/userModel.js";

export const update_profile = async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPhone = req.body.phoneNumber;
    const newProfilePic = req.body.profilePic;

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

