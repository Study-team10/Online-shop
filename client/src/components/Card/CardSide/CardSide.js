import React from "react";
import styled, { withTheme } from "styled-components";

const CardSideDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s ease;

  /* hide back part on rotate */
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 1.5rem 4rem #cdcdcd;

  &.side_back {
    transition: all 0.8s ease;
    transform: rotateY(180deg);
  }

  &.side_front {
    background: ${({ gradient }) => gradient};
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
`;

const CardSide = ({ frontSide = true, color, theme, children }) => {
  const className = frontSide ? "side side_front" : "side side_back";
  let firstColor = "black";
  let secondColor = "#365ca0";

  switch (color) {
    case "blue":
      firstColor = "tertiaryLight";
      secondColor = "tertiaryDark";
      break;
    case "green":
      firstColor = "primaryLight";
      secondColor = "primaryDark";
      break;
    case "orange":
      firstColor = "secondaryLight";
      secondColor = "secondaryDark";
      break;
    default:
      firstColor = "black";
      secondColor = "#365ca0";
      break;
  }
  let gradient = `linear-gradient(45deg, ${theme.colors[firstColor]}, ${theme.colors[secondColor]})`;
  return (
    <CardSideDiv color={color} gradient={gradient} className={className}>
      {children}
    </CardSideDiv>
  );
};

export default withTheme(CardSide);
