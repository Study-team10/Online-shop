import jwt from "jsonwebtoken";

import { response } from "../utils"

require("dotenv").config();

export const isAuthenticated = async (req, res, next) => {
    try {

        const { JWT_SECRET } = process.env;
        const bearerToken = req.get("Authorization");

        if (!bearerToken) {
            return res.status(401).json(response(false, "Not authenticated"));
        }
        const token = bearerToken.split(" ")[1];

        try {
            let decodedToken = await jwt.verify(token, JWT_SECRET);
            if (decodedToken)
                return next();
        } catch (error) {
            return res.status(401).json(response(false, "Not authenticated"));
        }



    } catch (error) {
        return error;
    }

};