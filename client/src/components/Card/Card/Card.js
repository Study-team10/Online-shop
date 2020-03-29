import React from "react";
import { StyledGrid } from "@components/UI/Grid/Grid";

import styled from "styled-components";

const CardDiv = styled(StyledGrid)`
  position: relative;
  margin: 20px 30px;
  height: ${({ sidebar }) => (sidebar ? "200px" : "300px")};
  &:hover .side_front {
    transform: rotateY(-180deg);
  }

  &:hover .side_back {
    transform: rotateY(0);
  }
`;

const Card = ({ sidebar = false, children, ...props }) => {
  return (
    <CardDiv sidebar={sidebar} {...props}>
      {children}
    </CardDiv>
  );
};

export default Card;
