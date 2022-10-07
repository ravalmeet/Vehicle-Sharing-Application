import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema(
  {
    email: { coordinates: [] },
    noOfPassengers: { type: String, required: true },
    availableSeats: { type: String, default: "" },
    hostEmail:{type:String, required:true}
  },
  { timestamps: true } 
);

const GroupModel = mongoose.model("Group", GroupSchema);
export default GroupModel;
