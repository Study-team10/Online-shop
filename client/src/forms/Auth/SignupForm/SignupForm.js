import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { SignupSchema } from "@forms/validations";
import { Grid, ErrorMessage } from "@components";
import { axios } from "@util";

const SignupForm = ({ switchForm }) => {
  const [beError, setBeError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <Grid container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          age: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={async values => {
          try {
            const res = await axios.post("/user/signup", values);
            if (!res.data.success) {
              setBeError(res.data.message);
            } else {
              setSuccess("You successfully created account!");
              setTimeout(() => switchForm(true), 2000);
            }
          } catch (error) {
            setBeError("Doslo je do greske!");
          }
        }}
      >
        {({ values, errors, touched, isSubmitting, ...props }) => {
          return (
            <Form>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {success}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="firstName" type="text" placeholder="First Name" />
                <ErrorMessage
                  name="firstName"
                  touched={errors.firstName}
                  value={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="lastName" type="text" placeholder="Last Name" />
                <ErrorMessage
                  name="lastName"
                  touched={errors.lastName}
                  value={errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="email" type="email" placeholder="E-mail" />
                <ErrorMessage
                  name="email"
                  touched={errors.email}
                  value={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="age" type="number" placeholder="Age" />
                <ErrorMessage
                  name="age"
                  touched={errors.age}
                  value={errors.age}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  name="password"
                  label="password"
                  touched={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" value={errors.password} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {beError}
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

export default SignupForm;
