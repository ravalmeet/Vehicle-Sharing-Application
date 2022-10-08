import mongoose from "mongoose";

const DistrictUserSchema = new mongoose.Schema(
  {
    district: {
      districtName: { type: String, required: true },
      areas: [
        { areaName: { type: String, required: true }, coordinates: [] },
      ],
    },
  },
  { timestamps: true }
);

const DistrictUserModel = mongoose.model("DistrictUser", DistrictUserSchema);
export default DistrictUserModel; 
