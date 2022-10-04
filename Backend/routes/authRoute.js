import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/auth.js";
import bodyParser from "body-parser";
const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", registerUser);
router.post("/login", loginUser);

// router.get("/test", verifyToken, function (req, res) {
//   res.status(200).send({ success: true, msg: "Authenticated!!" });
// });

export default router;
