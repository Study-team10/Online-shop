import bcrypt from "bcryptjs";

import User from "../../models/User";

export const signup = async (req, res, next) => {
    try {

        const { firstName, lastName, email, password, age } = req.body;
        if (!firstName || !lastName || !email || !password || !age)
            return res.status(400).json({ "message": "All fields are required" });

        const existingEmail = await User.findOne({ email });
        if (existingEmail)
            return res.status(400).json({ "message": "User with this email already exists." });

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

        return res.status(200).json({ "message": "User successfully registered" });

    } catch (error) {
        return error;
    }
};