import User from "../../models/User";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let existingUser = await User.findOne({ email });
        if (!existingUser)
            throw new Error("User does not exist");

        const correctPassword = await bcrypt.compare(password, existingUser.password);

        if (!correctPassword)
            throw new Error("Not valid password");

        const token = await jwt.sign({ idUser: existingUser.id }, "secret_key");
        res.setHeader("Authorization", "Bearer " + token);
        res.status(201).json({ "message": "User is successfully logged" });
    } catch (error) {
        next(error);
    }
};