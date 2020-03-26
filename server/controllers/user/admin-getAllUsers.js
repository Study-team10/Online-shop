import User from "../../models/User";

import { response } from "../../utils"

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if (users.length == 0)
            return res.status(200).json(response(false, "No users found"));

        return res.status(200).json(users);

    } catch (error) {
        return error;
    }
};