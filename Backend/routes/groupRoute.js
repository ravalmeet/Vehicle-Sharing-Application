import express from "express";
import {
  break_group,
  create_group,
  leave_group,
  update_group,
} from "../controllers/groupController.js";
const groupRouter = express();
groupRouter.use(bodyParser.json());
groupRouter.use(bodyParser.urlencoded({ extended: true }));

import bodyParser from "body-parser";

groupRouter.post("/create-group", create_group);
groupRouter.post("/update-group", update_group);
groupRouter.post("/break-group", break_group); // when host leave group, group will be deleted
groupRouter.post("/leave-group", leave_group); // when user leave group, group will not be deleted
export default groupRouter;
