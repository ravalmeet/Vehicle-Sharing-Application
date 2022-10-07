import express from "express";
import { create_group } from "../controllers/groupController.js";
const groupRouter = express();
groupRouter.use(bodyParser.json());
groupRouter.use(bodyParser.urlencoded({ extended: true }));

import bodyParser from "body-parser";

groupRouter.post("/create-group", create_group);

export default groupRouter;
