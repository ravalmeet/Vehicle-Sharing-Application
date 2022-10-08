import express from "express";
import { create_districtUser } from "../controllers/districtUserController.js";
const districtUserRoute = express();
districtUserRoute.use(bodyParser.json());
districtUserRoute.use(bodyParser.urlencoded({ extended: true }));

import bodyParser from "body-parser";

districtUserRoute.post("/create-districtUser", create_districtUser);

export default districtUserRoute;
