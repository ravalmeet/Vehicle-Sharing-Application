import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"; // auth routes
import groupRoute from "./routes/groupRoute.js";
import districtAreaRoute from "./routes/districtAreaRoute.js"
import drivingRoute from "./routes/drivingRoute.js";
import districtUserRoute from "./routes/districtUserRoute.js";
import { getSuggestedUsers } from "./controllers/getSuggestionsController.js";

const app = express();

app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGO;
mongoose
  .connect(CONNECTION)
  .then(() =>
    app.listen(PORT, () => console.log(`🔥 Listening at Port ${PORT} 🔥`))
  )
  .catch((error) => console.log(`${error} did not connect`));

app.use("/auth", authRoute);
app.use("/auth", groupRoute);
app.use("/auth",districtAreaRoute)
app.use("/auth",districtUserRoute)
app.use("/auth",getSuggestedUsers)

app.use('/driving',drivingRoute);
