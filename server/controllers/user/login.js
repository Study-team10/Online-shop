import User from "../../models/User";

import { response } from "../../utils"

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

require("dotenv").config();

export const login = async (req, res, next) => {
    try {
        const { JWT_SECRET } = process.env;
        const { email, password } = req.body;
        let existingUser = await User.findOne({ email });
        if (!existingUser)
            return res.status(201).json(response(false, "User does not exist"));

        const correctPassword = await bcrypt.compare(password, existingUser.password);

        if (!correctPassword)
            return res.status(201).json(response(false, "Not valid user"));

        const token = await jwt.sign({ idUser: existingUser.id, firstName: existingUser.firstName, lastName: existingUser.lastName, role: existingUser.role }, JWT_SECRET);
        res.setHeader("Authorization", "Bearer " + token);
        return res.status(201).json(response(true, "User is successfully logged"));
    } catch (error) {
        next(error);
    }
};