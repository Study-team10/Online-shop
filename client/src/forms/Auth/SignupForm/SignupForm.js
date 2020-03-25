import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { SignupSchema } from "@forms/validations";
import { Grid, ErrorMessage } from "@components";
import { TextInput } from "@inputs";
import { axios } from "@util";
import { useHistory } from "react-router";

const SignupForm = ({ switchForm }) => {
  const { beError, setBeError } = useState("");
  const history = useHistory();

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

            !res.data.success
              ? setBeError(res.data.message)
              : history.push("/admin");
          } catch (error) {
            setBeError(error.data.message);
          }
        }}
      >
        {({ values, errors, touched, isSubmitting, ...props }) => {
          return (
            <Form>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="firstName" type="text" placeholder="First Name" />
                <ErrorMessage name="firstName" value={errors.firstName} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="lastName" type="text" placeholder="Last Name" />
                <ErrorMessage name="lastName" value={errors.lastName} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="email" type="email" placeholder="E-mail" />
                <ErrorMessage name="email" value={errors.email} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field name="age" type="number" placeholder="Age" />
                <ErrorMessage name="age" value={errors.age} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Field
                  name="password"
                  label="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" value={errors.password} />
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {beError}
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default SignupForm;
