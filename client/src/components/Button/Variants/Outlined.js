import styled from "styled-components";
import Default from "./Default";

export default styled(Default)`
  background: transparent;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
`;
