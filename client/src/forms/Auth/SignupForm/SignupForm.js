import React from "react";
import { Formik, Field } from "formik";
import { SignupSchema } from "@forms/validations";
import { Grid, ErrorMessage } from "@components";
import { TextInput } from "@inputs";
import { axios } from "@util";

const SignupForm = ({ switchForm }) => {
  const handleSubmit = async values => {
    console.log(values);
    try {
      const res = await axios.post("/user/signup", {
        firstName: "Kristina",
        lastName: "Pejcic",
        password: values.password,
        email: values.email,
        age: 25
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Grid container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          age: null
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting, ...props }) => {
          console.log(errors);
          return (
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  // fullWidth={true}
                  // required
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  // component={TextInput}
                  {...props}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ErrorMessage name="email" value={errors.email} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  // fullWidth={true}
                  required
                  name="password"
                  label="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  // component={TextInput}
                  // value={values.password}
                  {...props}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ErrorMessage name="password" component="div" />
              </Grid>
              <p>
                Already have account?
                <span
                  style={{ cursor: "pointer", color: "#fff" }}
                  onClick={switchForm}
                >
                  Login here
                </span>
              </p>
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default SignupForm;
