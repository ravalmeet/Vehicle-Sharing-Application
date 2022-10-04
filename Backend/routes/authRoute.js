import express from "express";
import {
  loginUser,
  registerUser,
  update_password,
  forgot_password,
  reset_password,  
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";
import bodyParser from "body-parser"; 
const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", registerUser);
router.post("/login", loginUser);

//for testing the login jwt-token 
router.get("/test", verifyToken, function (req, res) {
  res.status(200).send({ success: true, msg: "Authenticated!!" });
});

//update password route
router.post("/update-password", update_password);

router.post("/forgot-password", forgot_password);

router.get("/reset-password", reset_password);

export default router;
