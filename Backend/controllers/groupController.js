import GroupModel from "../models/groupModel.js";
import UserModel from "../models/userModel.js";

// Create new group
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
      console.log(storeGroup);
      const userData = await UserModel.updateOne(
        { email: req.body.hostEmail },
        { $set: { groupID: storeGroup._id } }
      );
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

export const update_group = async (req, res) => {
  const noOfPassengers = req.body.noOfPassengers;
  const availableSeats = req.body.availableSeats;
  const email1 = req.body.email1;
  const email2 = req.body.email2;
  try {
    const userData = await UserModel.findOne({ email: req.body.hostEmail });
    if (userData) {
      // const storeGroup = await newGroup.save();

      const userData = await UserModel.findOneAndUpdate(
        { email: req.body.hostEmail },
        {
          $set: {
            noOfPassengers: noOfPassengers,
            availableSeats: availableSeats,

            email: {
              coordinates: [
                email1,
                email2,
                // req.body.email3,
                // req.body.email4,
                // req.body.email5,
              ],
            },
          },
        }
      );
      res
        .status(200)
        .send({ success: true, msg: "Group Updated!!", data: userData });
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Host with this email doen't exists." });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export const break_group = async (req, res) => {
  try {
    const userData = await UserModel.findOne({ email: req.body.hostEmail });
    if (userData) {
      const group = await GroupModel.findOneAndDelete({
        _id: userData.groupID,
      });

      const Data = await UserModel.findOneAndUpdate(
        { email: req.body.hostEmail },
        {
          $set: {
            groupID: "",
          },
        }
      );
      res
        .status(200)
        .send({ success: true, msg: "Your group deleted successfully" });
    }
    res
      .status(200)
      .send({ success: true, msg: "Group with this email does not exists" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const leave_group = async (req, res) => {
  try {
    const userGroup = await GroupModel.findOne({
      "email.coordinates": req.body.email,
    });
    if (userGroup) {
      const users = userGroup.email.coordinates;
      const index = users.indexOf(req.body.email);
      if (index > -1) {
        users.splice(index, 1);
      }
      console.log(users);
      // console.log(userGroup.email.coordinates);
      const newGroup = await GroupModel.findOneAndUpdate(
        { "email.coordinates": req.body.email },
        {
          $set: {
            "email.coordinates": users,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, msg: "You're left from group successfully!!" });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "You're not a part of any group yet!!" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
