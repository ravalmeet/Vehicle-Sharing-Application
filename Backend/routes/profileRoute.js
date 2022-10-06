// import express from "express";
// import { update_profile } from "../controllers/profileController.js";
// import bodyParser from "body-parser";
// import multer from "multer";
// import path from "path";
// const profileRouter = express();
// import { profiles } from "../controllers/profileController.js";

// profileRouter.use(bodyParser.json());
// profileRouter.use(bodyParser.urlencoded({ extended: true }));
// profileRouter.use(express.static("public"));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(
//       null,
//       path.join(__dirname, "../public/userProfiles"),
//       function (error, success) {
//         if (error) throw error;
//       }
//     );
//   },
//   filename: function (req, file, cb) {
//     const name = Date.now() + "-" + file.originalname;
//     cb(null, name, function (error1, success) {
//       if (error1) throw error1;
//     });
//   },
// });

// const upload = multer({ storage: storage });

// profileRouter.post("/profiles", upload.single("profile"), profiles);
// profileRouter.post("/update-profile", update_profile);
// export default profileRouter;
