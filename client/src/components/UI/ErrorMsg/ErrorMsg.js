import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

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
const ErrorMsg = ({ children, variant, ...props }) => {
  if (variant === "contained") {
    return <ContainedError {...props}>{children}</ContainedError>;
  }
  return <StyledError {...props}>{children}</StyledError>;
};

ErrorMsg.propTypes = {
  children: PropTypes.string
};

export default ErrorMsg;
