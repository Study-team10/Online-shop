import React from "react";
import styled from "styled-components";

const HeadingStyled = styled.h1`
  color: transparent;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, #ffc107, #ff9800);
`;
const Heading = ({ children }) => {
  return <HeadingStyled>{children}</HeadingStyled>;
};

export default Heading;
