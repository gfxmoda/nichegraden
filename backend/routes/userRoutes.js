import express from "express";
import {
  registerUserRequest,
  activateUserAccount,
  authUser,
  getUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registerUserRequest);
router.route("/authenticate/activate/:token").post(activateUserAccount);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
