import React, { useState } from "react";
import { LoginSchema } from "@forms/validations";
import { ErrorMsg, Field, Button, Grid, Typography } from "@components";
import { axios } from "@util";
import { useHistory } from "react-router";
import useFormik from "@hooks/useFormik";

const LoginForm = ({ switchForm }) => {
  const [beError, setBeError] = useState("");
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async values => {
      try {
        const res = await axios.post("/user/login", values);
        if (res.data.success) {
          localStorage.setItem(
            "token",
            res.headers.authorization.split(" ")[1]
          );
          history.push("/admin/users");
        } else {
          setBeError(res.data.message);
        }
      } catch (error) {
        setBeError("OOOPS! Login failed!");
      }
    },
    validationSchema: LoginSchema
  });
  const { handleSubmit, getFieldProps, touched, errors, isValid } = formik;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center">
          <Grid xs={12}>
            <ErrorMsg>{errors.email && touched.email && errors.email}</ErrorMsg>
          </Grid>
          <Grid xs={12}>
            <Field
              name="email"
              fullWidth
              disablePaste
              placeholder="E-mail"
              component="TextInput"
              {...getFieldProps("email")}
            />
          </Grid>

          <Grid xs={12}>
            <ErrorMsg>
              {errors.password && touched.password && errors.password}
            </ErrorMsg>
          </Grid>
          <Grid xs={12} style={{ position: "relative" }}>
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

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {beError}
          </Grid>
          <Typography>
            Don't have account?
            <Typography
              variant="textLink"
              style={{ cursor: "pointer", paddingLeft: 5 }}
              onClick={switchForm}
            >
              Signup here
            </Typography>
          </Typography>

          <Grid xs={12}>
            <Grid container justify="center" alignItems="center">
              <Grid xs={7}>
                <Button
                  color="primary"
                  variant="contained"
                  rounded="corners"
                  bold
                  fullWidth
                  type="submit"
                  disabled={!isValid}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
