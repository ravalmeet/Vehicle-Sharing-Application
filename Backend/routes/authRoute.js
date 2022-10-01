import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import auth from "../middleware/auth"
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/test", auth, function (req, res) {
    res.status(200).send({ success: true, msg: "Authenticated!!" });
  });
  
export default router
