import styled from "styled-components";
import Default from "./Default";
// import { darken } from "~/src/utils/colorManipulation";

export default styled(Default)`
  background: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:active {
    outline: none;
  }
`;
