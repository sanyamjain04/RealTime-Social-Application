import { Router } from "express";
import * as authController from '../controllers/auth.controller'

const router = Router()

router.post("/login", authController.login);

router.post("/register", authController.register, authController.sendOTP);
router.post("/verify", authController.verifyOTP);
router.post("/send-otp", authController.sendOTP);

router.post("/forgot-password", authController.forgetPassword);
router.post("/reset-password", authController.resetPassword);


export default router