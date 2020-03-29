// import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
// import { SignupSchema } from "@forms/validations";
// import { Grid, ErrorMessage } from "@components";
// import { axios } from "@util";

// const SignupForm = ({ switchForm }) => {
//   const [beError, setBeError] = useState("");
//   const [success, setSuccess] = useState("");

//   return (
//     <Grid container>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           age: ""
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={async values => {
//           try {
//             const res = await axios.post("/user/signup", values);
//             if (!res.data.success) {
//               setBeError(res.data.message);
//             } else {
//               setSuccess("You successfully created account!");
//               setTimeout(() => switchForm(true), 2000);
//             }
//           } catch (error) {
//             setBeError("Doslo je do greske!");
//           }
//         }}
//       >
//         {({ values, errors, touched, isSubmitting, ...props }) => {
//           return (
//             <Form>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 {success}
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field name="firstName" type="text" placeholder="First Name" />
//                 <ErrorMessage
//                   name="firstName"
//                   touched={errors.firstName}
//                   value={errors.firstName}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field name="lastName" type="text" placeholder="Last Name" />
//                 <ErrorMessage
//                   name="lastName"
//                   touched={errors.lastName}
//                   value={errors.lastName}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field name="email" type="email" placeholder="E-mail" />
//                 <ErrorMessage
//                   name="email"
//                   touched={errors.email}
//                   value={errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field name="age" type="number" placeholder="Age" />
//                 <ErrorMessage
//                   name="age"
//                   touched={errors.age}
//                   value={errors.age}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 <Field
//                   name="password"
//                   label="password"
//                   touched={errors.password}
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                 />
//                 <ErrorMessage name="password" value={errors.password} />
//               </Grid>
//               <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//                 {beError}
//               </Grid>
//               <p>
//                 Already have account?
//                 <span
//                   style={{ cursor: "pointer", color: "#fff" }}
//                   onClick={switchForm}
//                 >
//                   Login here
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

// export default SignupForm;

import React, { useState } from "react";
import { SignupSchema } from "@forms/validations";
import { ErrorMsg, Field, Button, Grid } from "@components";
import { axios } from "@util";
import useFormik from "@hooks/useFormik";

const SignupForm = ({ switchForm }) => {
  const [beError, setBeError] = useState("");
  const [setSuccess] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: ""
    },
    onSubmit: async values => {
      values.role = "Admin";
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

          {/* Age */}
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ErrorMsg>{errors.age && touched.age && errors.age}</ErrorMsg>

            <Field
              name="age"
              disablePaste
              placeholder="Age"
              component="TextInput"
              {...getFieldProps("age")}
            />
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
                  Signup
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignupForm;
