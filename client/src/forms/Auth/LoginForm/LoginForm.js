// import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
// import { LoginSchema } from "@forms/validations";
// import { Grid, ErrorMessage } from "@components";
// import { axios } from "@util";
// import { useHistory } from "react-router";

// const LoginForm = ({ switchForm }) => {
//   const [beError, setBeError] = useState("");
//   const history = useHistory();
//   return (
//     <Grid container>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={LoginSchema}
//         onSubmit={async values => {
//           try {
//             const res = await axios.post("/user/login", values);
//             !res.data.success
//               ? setBeError(res.data.message)
//               : history.push("/admin");
//           } catch (error) {
//             setBeError("Doslo je do greske!");
//           }
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting
//         }) => {
//           return (
//             <Form>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field name="email" type="email" placeholder="E-mail" />
//                 <ErrorMessage
//                   name="email"
//                   touched={touched.email}
//                   value={errors.email}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field
//                   name="password"
//                   label="password"
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                 />
//                 <ErrorMessage
//                   name="password"
//                   touched={touched.password}
//                   value={errors.password}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 {beError}
//               </Grid>
//               <p>
//                 Don't have account?
//                 <span
//                   style={{ cursor: "pointer", color: "#fff" }}
//                   onClick={switchForm}
//                 >
//                   Signup here
//                 </span>
//               </p>
//               <button type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </Form>
//           );
//         }}
//       </Formik>
//     </Grid>
//   );
// };

// export default LoginForm;

// SECOND VERSION

import React, { useState } from "react";
import { LoginSchema } from "@forms/validations";
import { ErrorMsg, Field, Button, Grid } from "@components";
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
          <p>
            Don't have account?
            <span
              style={{ cursor: "pointer", color: "#fff", paddingLeft: 10 }}
              onClick={switchForm}
            >
              Signup here
            </span>
          </p>
          <Grid xs={12}>
            <Grid container justify="center" alignItems="center">
              <Grid xs={7}>
                <Button
                  color="primary"
                  variant="contained"
                  rounded="corners"
                  bold
                  fullWidth
                  style={{
                    padding: "20px 0"
                  }}
                  size="lg"
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
