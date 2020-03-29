import styled from "styled-components";
import Default from "./Default";

export default styled(Default)`
  background: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:active {
    outline: none;
    background: ${({ theme, color, disabled }) =>
      !disabled && theme.colors[color]};
  }
`;
