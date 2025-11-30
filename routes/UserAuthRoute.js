import express from "express";
const router = express.Router();
import {
  forgetPassword,
  login,
  logout,
  registerUser,
  resetPassword,
  verifyUser,
} from "../controllers/UserAuthController.js";



router.post("/login", login);
router.post("/registerUser", registerUser);
router.get("/verifyUser", verifyUser);
router.post("/logout", logout);
router.post("/resetPassword", resetPassword);
router.post("/forgetPassword", forgetPassword);

export default router;
