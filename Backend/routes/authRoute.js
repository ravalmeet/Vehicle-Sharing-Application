import express from "express";
import {
  loginUser,
  registerUser,
  update_password,
  forgot_password,
<<<<<<< HEAD
  reset_password,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";
import bodyParser from "body-parser";
=======
  reset_password,  
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";
import bodyParser from "body-parser"; 
>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", registerUser);
router.post("/login", loginUser);

<<<<<<< HEAD
//for testing the login token
=======
//for testing the login jwt-token 
>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
router.get("/test", verifyToken, function (req, res) {
  res.status(200).send({ success: true, msg: "Authenticated!!" });
});

//update password route
router.post("/update-password", update_password);

router.post("/forgot-password", forgot_password);

router.get("/reset-password", reset_password);
<<<<<<< HEAD
=======

>>>>>>> 63556f50f64d3d2e9fe83b768827e3e482f2ddc1
export default router;
