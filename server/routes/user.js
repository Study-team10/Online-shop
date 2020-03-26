import express from "express";
import { signup, login, getAllUsers, deleteUser } from "../controllers/user";

import { registrationValidation, loginValidation } from "../validation"
import { validationMiddleware, isAuthenticated, isAdmin } from "../middlewares"

const router = express.Router();
router.post("/signup", registrationValidation, validationMiddleware, signup);
router.post("/login", loginValidation, validationMiddleware, login);

//ADMIN'S ROUTES

router.get("/getallusers", isAdmin, getAllUsers);
router.delete("/deleteuser/:id", isAdmin, deleteUser);
//router.get("/private", isAdmin, () => console.log('private'));
export default router;