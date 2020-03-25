import { check } from "express-validator";

const firstName = check("firstName", "Not valid first name").notEmpty().isLength({ min: 3, max: 25 });

const lastName = check("lastName", "Not valid last name").notEmpty().isLength({ min: 3, max: 25 });

const email = check("email", "Not valid email").notEmpty().isEmail();

const age = check("age", "Not valid age").isInt({ min: 15, max: 99 });

export { firstName, lastName, email, age };
