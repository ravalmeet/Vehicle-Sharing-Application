import express from "express";
import {
  loginUser,
  registerUser,
  update_password,
  forgot_password,
  reset_password,
  add_profile,
  update_profile,
  add_location,
  add_areaDistrict,
  host_details,
  verify_email,
} from "../controllers/userController.js";

const router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


import multer from "multer";
import path from "path";


const __dirname = path.resolve();
router.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.join(__dirname, "../public/userImages"),
      function (error, success) {
        if (error) throw error;
      }
    );
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error1, success) {
      if (error1) throw error1;
    });
  },
});

const upload = multer({ storage: storage });
import { verifyToken } from "../middleware/auth.js";
import bodyParser from "body-parser";

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

router.post("/add-profile", upload.single("image"), add_profile);
router.post("/update-profile", update_profile);
router.post("/add-location", add_location);
router.post("/add-areaDistrict", add_areaDistrict);
router.post("/host-details", host_details);
router.post("/verify-email",verify_email)
export default router;
