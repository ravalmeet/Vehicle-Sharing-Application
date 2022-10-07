import express from "express";
import { create_district } from "../controllers/districtAreaController.js";
const districtAreaRoute = express();
districtAreaRoute.use(bodyParser.json());
districtAreaRoute.use(bodyParser.urlencoded({ extended: true }));

import bodyParser from "body-parser";

districtAreaRoute.post("/create-district", create_district);

export default districtAreaRoute;
