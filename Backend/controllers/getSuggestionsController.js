import DistrictUserModel from "../models/districtUserModel.js";
import DistrictAreaModel from "../models/districtAreaModel.js";
import UserModel from "../models/userModel.js";
// Register new group

const Helper = async (hostDistrict, areaName) => {
  try {
    const result = await DistrictUserModel.findOne({
      districtName: hostDistrict,
    });
    const district = result.district.toJSON();
    const areas = district.areas;

    let users;

    areas.forEach((area) => {
      const area1 = String(area.areaName).trim().toLowerCase();
      const area2 = areaName.toLowerCase().trim();
      if (area1 == area2) {
        users = area.coordinates;
      }
    });
    return users;
  } catch (error) {}
};

export const getSuggestedUsers = async (req, res) => {
  try {
    const hostDistrict = req.body.district;
    const hostArea = req.body.area;
    const result = await DistrictAreaModel.findOne({
      districtName: hostDistrict,
    });
    const district = result.district.toJSON();
    // console.log(district)
    const areas = district.areas;
    // console.log(areas)
    let users = [];

    for (const area of areas) {
      if (area.areaName == hostArea) {
        for (var i = 0; i < area.coordinates.length; i++) {
          const areaCoordinates = area.coordinates[i];
          const areaUsers = await Helper(hostDistrict, areaCoordinates);
          if (areaUsers) {
            areaUsers.forEach((user) => {
              users.push(user);
            });
          }
        }
      }
    }
    console.log(users);
    const allUsers = [];
    for (var i = 0; i < users.length; i++) {
      const email = users[i];

      const userData = await UserModel.findOne({ email: email });

      if (userData) {
        // console.log(userData);
        const showMe = {
          name: userData.name,
          area: userData.area,
          journeyTime: userData.journeyTime,
        };
        console.log(showMe);
        allUsers.push(showMe);
      }
    }
    res.status(200).send({ success: true, data: allUsers });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
