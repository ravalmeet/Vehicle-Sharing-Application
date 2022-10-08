import express from "express";
import { getSuggestedUsers } from "../controllers/getSuggestionsController.js";
const getSuggestedRoute = express();
getSuggestedRoute.use(bodyParser.json());
getSuggestedRoute.use(bodyParser.urlencoded({ extended: true }));

import bodyParser from "body-parser";

getSuggestedRoute.post("/get-users", getSuggestedUsers);

export default getSuggestedRoute;
