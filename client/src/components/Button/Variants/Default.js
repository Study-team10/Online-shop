import styled from "styled-components";

export default styled.button`
  transition: all 0.2s ease-out;
  outline: none;
  border: 1px solid transparent;
  font-family: "Montserrat";
  box-shadow: 0px 5px 15px #00000040;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "thin" ? 400 : fontWeight === "medium" ? 500 : 700};
  padding: ${({ size }) =>
    size === "xs" ? "15px 20px" : size === "sm" ? "20px 25px" : "25px 30px"};
  color: ${({ theme, color }) => theme.colors[color]};
  text-transform: ${({ textTransform }) => textTransform && textTransform};
  opacity: ${({ disabled }) => disabled && "0.4"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  font-size: ${({ theme, size }) => (size ? theme.buttonSizes[size] : "12px")};
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  border-radius: ${({ rounded }) =>
    rounded === "elipse" ? "100px" : rounded === "corners" ? "10px" : "none"};
  @media (max-width: 600px) {
    ${props => props.mobile && props.mobile};
    font-size: 18px;
  }
  &:hover {
    cursor: ${({ disabled }) => !disabled && "pointer"};
    background: ${({ theme, disabled }) => !disabled && theme.colors.white};
  }
`;
