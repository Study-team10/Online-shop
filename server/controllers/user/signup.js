import bcrypt from "bcryptjs";

import User from "../../models/User";
import { response } from "../../utils"

export const signup = async (req, res, next) => {
    try {

        const { firstName, lastName, email, password, age } = req.body;
        if (!firstName || !lastName || !email || !password || !age)
            return res.status(201).json(response(false, "All fields are required."));

        const existingEmail = await User.findOne({ email });
        if (existingEmail)
            return res.status(201).json(response(false, "User with this email already exists."));

        const newPass = await bcrypt.hash(password, 12);
        const user = new User({
            firstName,
            lastName,
            email,
            age,
            password: newPass
        });

        await user.save(function (err) {
            if (err) console.log(err);
        });

        return res.status(201).json(response(true, "User successfully registered."));

    } catch (error) {
        return error;
    }
};