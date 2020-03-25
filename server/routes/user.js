import express from "express";
import { signup, login } from "../controllers/user";

import { registrationValidation, loginValidation } from "../validation"
import { validationMiddleware, isAuthenticated } from "../middlewares"

const router = express.Router();
router.post("/signup", registrationValidation, validationMiddleware, signup);
router.post("/login", loginValidation, validationMiddleware, login);
export default router;