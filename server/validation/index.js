import { firstName, lastName, email, age } from "./fields"

const registrationValidation = [firstName, lastName, email, age];

const loginValidation = [email];

export { registrationValidation, loginValidation };