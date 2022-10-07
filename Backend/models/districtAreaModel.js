import mongoose from "mongoose";

const DistrictAreaSchema = new mongoose.Schema(
  {
    district: {
      districtName: { type: String, required: true },
      coordinates: [
        { areaName: { type: String, required: true }, coordinates: [] },
      ],
    },
  },
  { timestamps: true }
);

const DistrictAreaModel = mongoose.model("DistrictArea", DistrictAreaSchema);
export default DistrictAreaModel; 
