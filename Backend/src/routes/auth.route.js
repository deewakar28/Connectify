import { Router } from "express";
import { currentUser,loginUser,logoutUser,signupUser, updateProfile } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

router.route("/update-profile").put(verifyJWT, updateProfile);

router.route("/check").get(verifyJWT, currentUser);

export default router;
