import React from "react";
import { Formik, Field, Form } from "formik";
import { LoginSchema } from "@forms/validations";
import { Grid, ErrorMessage } from "@components";
import { axios } from "@util";
const LoginForm = ({ switchForm }) => {
  return (
    <Grid container>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={async values => {
          try {
            const res = await axios.post("/user/login", values);
            console.log("success", res);
          } catch (error) {
            console.log(error.message);
          }
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
          return (
            <Form>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="email" type="email" placeholder="E-mail" />
                <ErrorMessage
                  name="email"
                  touched={touched.email}
                  value={errors.email}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  name="password"
                  label="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  touched={touched.password}
                  value={errors.password}
                />
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
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default LoginForm;
