import DistrictAreaModel from "../models/districtAreaModel.js";

// Register new group
export const create_district = async (req, res) => {
  const newDistrict = new DistrictAreaModel({
    district: {
      districtName: req.body.districtName,
      coordinates: [
        {
          areaName: req.body.areaName1,
          coordinates: [req.body.area1, req.body.area2, req.body.area3,req.body.area8,req.body.area9],
        },
        {
          areaName: req.body.areaName2,
          coordinates: [req.body.area4, req.body.area5,req.body.area10],
        },
        {
          areaName: req.body.areaName3,
          coordinates: [req.body.area6, req.body.area7],
        },
      ],
    },
  });

  try {
    
    
    if (newDistrict) {
      const storeDistrict = await newDistrict.save();
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
