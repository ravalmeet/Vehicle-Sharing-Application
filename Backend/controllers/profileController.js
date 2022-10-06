// import UserModel from "../models/userModel.js";
// import ProfileModel from "../models/profileModel";
// export 
// const update_profile = async (req, res) => {
//   try {
//     const user_id = req.body.user_id;
//     const newName = req.body.name;
//     const newEmail = req.body.email;
//     const newPhone = req.body.phoneNumber;
//     const newProfilePic = req.body.profilePic;

//     const data = await UserModel.findOne({ id: user_id });

//     if (data) {
//       const userData = await UserModel.findByIdAndUpdate(
//         { _id: user_id },
//         {
//           $set: {
//             name: newName,
//             email: newEmail,
//             phoneNumber: newPhone,
//             profilePic: newProfilePic,
//           },
//         }
//       );

//       res
//         .status(200)
//         .send({ success: true, msg: "Your profile has been updated" });
//     } else {
//       res.status(200).send({ success: false, msg: "User Id not found!!" });
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// export const profiles = async (req, res) => {
//   try {
//     const userData = await UserModel.findOne({ email: req.body.email });
//     if (userData) {
//       const data = await UserModel.updateOne(
//         { email: req.body.email },
//         { $set: { profilePic: req.file.filename } }
//       );

//       res.status(200).send({ success: true, data: data });
//     } else {
//       res.status(200).send({ success: false, msg: "User doesn't exists" });
//     }
//   } catch (err) {
//     res.status(400).send({ success: false, msg: err.message });
//   }
// };
