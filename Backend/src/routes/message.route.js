import express from "express";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/users").get(verifyJWT, getUsersForSidebar);
router.route("/:id").get(verifyJWT, getMessages);

router.route("/send/:id").post(verifyJWT, sendMessage);

export default router;
