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
  background: ${({ children, success, theme: { colors } }) =>
    children && !success ? colors.error : colors.primaryDark};
  color: ${({ children, success, theme }) => children && theme.colors.white};
  text-align: center;
  font-size: 1rem;
`;
const ErrorMsg = ({ children, variant, success = false, ...props }) => {
  if (variant === "contained") {
    return (
      <ContainedError success={success} {...props}>
        {children}
      </ContainedError>
    );
  }
  return <StyledError {...props}>{children}</StyledError>;
};

ErrorMsg.propTypes = {
  children: PropTypes.string
};

export default ErrorMsg;
