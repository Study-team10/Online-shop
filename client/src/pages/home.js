import React, { useState } from "react";
import { LoginForm, SignupForm } from "@forms";
import { Grid } from "@components";
import styled from "styled-components";

const FormBox = styled.div`
  box-shadow: 1px 2px 10px #777;
  padding: 30px 50px;
  border-radius: 7px;
  color: tomato;
`;

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const switchForm = () => setIsLogin(!isLogin);
  return (
    <Grid
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(45deg, black, #365ca0)"
      }}
      container
      justify="center"
      alignItems="center"
    >
      {isLogin ? (
        <FormBox item>
          <h1>Login</h1>
          <LoginForm switchForm={switchForm} />
        </FormBox>
      ) : (
        <FormBox item>
          <h1>Signup</h1>
          <SignupForm switchForm={switchForm} />
        </FormBox>
      )}
    </Grid>
  );
};
export default Home;
