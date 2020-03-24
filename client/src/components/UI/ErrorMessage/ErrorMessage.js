import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { StyledGrid } from "../Grid/Grid";

const StyledError = styled.p`
  height: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: "Montserrat";
  color: ${props => props.theme.colors.error};
  margin: 3px 0;
`;
const ContainedError = styled(StyledError)`
  padding: 10px;
  height: 35px;
  background: ${({ children }) => children && "#f9000038"};
`;

const ErrorMessage = ({ children, variant, value, touched, ...props }) => {
  if (variant === "contained") {
    return value && touched ? (
      <ContainedError {...props}>{value}</ContainedError>
    ) : (
      <ContainedError></ContainedError>
    );
  }
  return value && touched ? (
    <StyledError {...props}>{value}</StyledError>
  ) : (
    <StyledError></StyledError>
  );
};

// ErrorMessage.propTypes = {
//   children: PropTypes.string
// };

export default ErrorMessage;
