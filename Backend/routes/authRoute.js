import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

const auth = require("../middleware/auth");

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/test", auth, function (req, res) {
    res.status(200).send({ success: true, msg: "Authentucated!!" });
  });
  
export default router
