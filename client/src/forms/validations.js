import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(25, "Too Long!")
    .matches(/^([^0-9]*)$/, "Only letters allowed")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^([^0-9]*)$/, "Only letters allowed")
    .required("Required"),
  age: Yup.string()
    .matches(/^(1[5-9]|[2-9][0-9])$/, "Invalid data!")
    .required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export { SignupSchema, LoginSchema };
