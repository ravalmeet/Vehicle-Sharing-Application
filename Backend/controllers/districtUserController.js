import DistrictUserModel from "../models/districtUserModel.js";

 
export const create_districtUser = async (req, res) => {
  const newDistrictUser = new DistrictUserModel({
    district: {
      districtName: req.body.districtName,
      coordinates: [
        {
          areaName: req.body.areaName1,
          coordinates: [req.body.userEmail1, req.body.userEmail2, req.body.userEmail3,req.body.userEmail4,req.body.userEmail5],
        },
        {
          areaName: req.body.areaName2,
          coordinates: [req.body.userEmail6, req.body.userEmail7,req.body.userEmail8],
        },
        {
          areaName: req.body.areaName3,
          coordinates: [req.body.userEmail9, req.body.userEmail10],
        },
      ],
    },
  });

  try {    
    
    if (newDistrictUser) {
      const storeDistrict = await newDistrictUser.save();
      res
        .status(200)
        .send({ success: true, msg: "District Created!!", data: storeDistrict });
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Something went wrong,District Not Created!!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
