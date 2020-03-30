import React from "react";
import { Grid, Heading } from "@components";
import { SignupForm } from "@forms";

const CreateUser = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Heading>Create user</Heading>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <SignupForm isCreateAdminForm />
      </Grid>
    </Grid>
  );
};
export default CreateUser;
