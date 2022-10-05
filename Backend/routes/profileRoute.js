import express from "express";
import {  update_profile } from "../controllers/profileController.js";
const router = express();

router.post("/update-profile", update_profile);

export default router;