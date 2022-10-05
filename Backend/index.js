import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
<<<<<<< HEAD
import authRoute from "./routes/authRoute.js";  // routes
import profileRoute from "./routes/profileRoute.js";

=======
import authRoute from "./routes/authRoute.js"; // auth routes
import profileRouter from "./routes/profileRoute.js"; // profile routes
>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
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
<<<<<<< HEAD
app.use("/profile", profileRoute);
=======
app.use("/api", profileRouter);
>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
