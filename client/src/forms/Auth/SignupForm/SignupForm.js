import React, { useState } from "react";
import { SignupSchema } from "@forms/validations";
import { ErrorMsg, Field, Button, Grid, Typography } from "@components";
import { axios } from "@util";
import useFormik from "@hooks/useFormik";

const SignupForm = ({ switchForm, isCreateAdminForm = false }) => {
  const [beError, setBeError] = useState("");
  const [success, setSuccess] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: ""
    },
    onSubmit: async values => {
      values.role = isCreateAdminForm ? "Admin" : "Customer";
      try {
        const res = await axios.post("/user/signup", values);
        if (!res.data.success) {
          setBeError(res.data.message);
        } else {
          setSuccess("You successfully created account!");
          setTimeout(() => !isCreateAdminForm && switchForm(true), 2000);
        }
      } catch (error) {
        setBeError("Doslo je do greske!");
      }
    },
    validationSchema: SignupSchema
  });
  const { handleSubmit, getFieldProps, touched, errors, isValid } = formik;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center">
          <Grid xs={12}>
            <Grid container>
              {/* First Name */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ErrorMsg>
                  {errors.firstName && touched.firstName && errors.firstName}
                </ErrorMsg>
                <Field
                  name="firstName"
                  fullWidth
                  disablePaste
                  placeholder="First Name"
                  component="TextInput"
                  {...getFieldProps("firstName")}
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ErrorMsg>
                  {errors.lastName && touched.lastName && errors.lastName}
                </ErrorMsg>

                <Field
                  name="lastName"
                  fullWidth
                  disablePaste
                  placeholder="Last Name"
                  component="TextInput"
                  {...getFieldProps("lastName")}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12}>
            <Grid container>
              {/* Email */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ErrorMsg>
                  {errors.email && touched.email && errors.email}
                </ErrorMsg>

                <Field
                  name="email"
                  fullWidth
                  disablePaste
                  placeholder="E-mail"
                  component="TextInput"
                  {...getFieldProps("email")}
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ErrorMsg>
                  {errors.password && touched.password && errors.password}
                </ErrorMsg>

                <Field
                  name="password"
                  type="password"
                  fullWidth
                  disablePaste
                  placeholder="Password"
                  component="TextInput"
                  {...getFieldProps("password")}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12}>
            <Grid container justify="center" alignItems="center">
              {/* Age */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ErrorMsg>{errors.age && touched.age && errors.age}</ErrorMsg>

                <Field
                  name="age"
                  fullWidth
                  disablePaste
                  placeholder="Age"
                  component="TextInput"
                  {...getFieldProps("age")}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <ErrorMsg> </ErrorMsg>
                <Button
                  color="primary"
                  variant="contained"
                  rounded="corners"
                  bold
                  fullWidth
                  type="submit"
                  disabled={!isValid}
                >
                  {isCreateAdminForm ? "Create" : " Signup"}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {beError && (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ErrorMsg variant="contained">{beError} </ErrorMsg>
            </Grid>
          )}
          {success && (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ErrorMsg variant="contained" success>
                {success}
              </ErrorMsg>
            </Grid>
          )}
          {!isCreateAdminForm && (
            <Typography>
              Already have account?
              <Typography
                variant="textLink"
                style={{ cursor: "pointer", paddingLeft: 5 }}
                onClick={switchForm}
              >
                Login here
              </Typography>
            </Typography>
          )}
        </Grid>
      </form>
    </div>
  );
};

export default SignupForm;
