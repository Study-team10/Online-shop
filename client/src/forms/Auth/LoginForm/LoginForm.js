import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { LoginSchema } from "@forms/validations";
import { Grid } from "@components";
const LoginForm = ({ switchForm }) => {
  return (
    <Grid container>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => {
          console.log(errors);
          return (
            <form onSubmit={handleSubmit}>
              <Grid container direction="column">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Field type="email" name="email" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ErrorMessage name="email" component="div" />
                </Grid>
              </Grid>

              <Grid container direction="column">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Field type="password" name="password" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ErrorMessage name="password" component="div" />
                </Grid>
              </Grid>
              <p>
                Don't have account?
                <span
                  style={{ cursor: "pointer", color: "#fff" }}
                  onClick={switchForm}
                >
                  Signup here
                </span>
              </p>
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

export default LoginForm;
