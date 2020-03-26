import User from "../../models/User";
import { response } from "../../utils"

export const deleteUser = async (req, res, next) => {
    try {
        const existingUser = await User.findByIdAndDelete({ _id: req.params.id });
        if (!existingUser)
            return res.status(200).json(response(false, "User does not exist"));

        return res.status(200).json(response(true, "User successfully deleted"));
    } catch (error) {
        return res.status(200).json(response(false, "User does not exist"));
    }
};