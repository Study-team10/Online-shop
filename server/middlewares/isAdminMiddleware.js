import jwt from "jsonwebtoken";
require("dotenv").config();

export const isAdmin = async (req, res, next) => {
    try {
        const { JWT_SECRET } = process.env;
        const bearerToken = req.get("Authorization");
        if (!bearerToken)
            return res.status(400).json({ "message": "Not autenticated" });
        const token = bearerToken.split(" ")[1];
        try {
            const decodedToken = jwt.decode(token, JWT_SECRET);
            if (decodedToken.role !== 'Admin')
                return res.status(400).json({ "message": "Not autenticated" });

            return next();
        } catch (error) {
            return res.status(400).json({ "message": "Not autenticated" });
        }
    } catch (error) {
        return error;
    }
};