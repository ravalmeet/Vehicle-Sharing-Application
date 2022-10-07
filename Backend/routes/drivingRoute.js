import { driving_licence } from '../controllers/drivingController.js';
import express from "express";
const router = express();
router.post("/driving-licence", driving_licence);

export default router;