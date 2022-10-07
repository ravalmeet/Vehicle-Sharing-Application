import GroupModel from "../models/groupModel.js";
import UserModel from "../models/userModel.js";

// Register new group
export const create_group = async (req, res) => {
  const newGroup = new GroupModel({
    noOfPassengers: req.body.noOfPassengers,
    availableSeats: req.body.availableSeats,
    email: {
      coordinates: [
        req.body.email1,
        req.body.email2,
        // req.body.email3,
        // req.body.email4,
        // req.body.email5,
      ],
    },
    hostEmail: req.body.hostEmail,
  });

  try {
    const userData = await UserModel.findOne({ email: req.body.hostEmail });
    if (userData) {
      const storeGroup = await newGroup.save();
      res
        .status(200)
        .send({ success: true, msg: "Group Created!!", data: storeGroup });
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Host with this email doen't exists." });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
