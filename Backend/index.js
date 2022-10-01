import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";  // routes

const app = express();

app.use(express.json())

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
