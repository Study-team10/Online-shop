import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  // firstName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // lastName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(10, "Too Long!")
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
