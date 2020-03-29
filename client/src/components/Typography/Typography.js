import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const StyledTypography = styled.div`
  font-size: ${props => props.fontSize}px;
  text-transform: ${({ variant, textTransform }) =>
    variant === "button" ? "uppercase" : textTransform && textTransform};
  text-align: ${props => props.align};
  display: ${props => (props.display === "inline" ? "inline-block" : "block")};
  font-weight: ${props => props.fontWeightSize};
  font-family: ${props =>
    props.font === "Raleway"
      ? props.theme.fonts.secondary
      : props.theme.fonts.primary};
  color: ${props => props.color};
  @media (max-width: 600px) {
    font-size: ${props => props.fontSizeMobile}px;
    ${props => props.mobile && props.mobile};
  }
`;

const Typography = ({
  variant = "body",
  children,
  align = "inherit",
  display = "initial",
  color,
  size,
  theme,
  fontWeight,
  mobile,
  textTransform,
  ...other
}) => {
  let fontSizeVariant = 15;
  let font = "Montserrat";
  let showAs = "p";
  let colorVariant = theme.colors.tertiaryDark;
  let fontWeightSize = 400;
  let fontSizeMobile = 14;

  switch (variant) {
    case "heading":
      fontSizeVariant = 35;
      fontSizeMobile = 30;
      fontWeightSize = 900;
      font = "Raleway";
      showAs = "h1";
      colorVariant = theme.colors.blue;
      break;
    case "subheader":
      fontSizeVariant = 25;
      fontSizeMobile = 20;
      fontWeightSize = 700;
      font = "Montserrat";
      showAs = "h3";
      colorVariant = theme.colors.secondaryLightGray;
      break;
    case "subheaderDark":
      fontSizeVariant = 20;
      fontSizeMobile = 45;
      fontWeightSize = 700;
      font = "Montserrat";
      showAs = "h3";
      break;
    case "placeholder":
      fontSizeVariant = 20;
      fontSizeMobile = 20;
      fontWeightSize = 400;
      font = "Montserrat";
      showAs = "p";
      colorVariant = theme.colors.secondaryLightGray;
      break;
    case "button":
      fontSizeVariant = 12;
      fontSizeMobile = 10;
      fontWeightSize = 700;
      font = "Montserrat";
      showAs = "p";
      break;
    case "helper":
      fontSizeVariant = 15;
      fontSizeMobile = 15;
      fontWeightSize = 400;
      font = "Montserrat";
      colorVariant = theme.colors.secondaryLightGray;
      showAs = "p";
      break;
    case "span":
      fontSizeVariant = 15;
      fontSizeMobile = 15;
      fontWeightSize = 700;
      font = "Montserrat";
      display = "inline";
      colorVariant = theme.colors.darkGray;
      showAs = "span";
      break;
    case "textLink":
      fontSizeVariant = 15;
      fontSizeMobile = 15;
      fontWeightSize = 400;
      font = "Montserrat";
      display = "inline";
      colorVariant = theme.colors.textLink;
      showAs = "span";
      break;
    default:
      colorVariant = theme.colors.text;
      break;
  }
  if (fontWeight) {
    switch (fontWeight) {
      case "bold":
        fontWeightSize = 700;
        break;
      case "light":
        fontWeightSize = 300;
        break;
      case "medium":
        fontWeightSize = 500;
        break;
      case "black":
        fontWeightSize = 900;
        break;
      default:
        fontWeightSize = 400;
        break;
    }
  }

  if (size) {
    switch (size) {
      case "xs":
        fontSizeVariant = 15;
        break;
      case "sm":
        fontSizeVariant = 20;
        break;
      case "md":
        fontSizeVariant = 30;
        break;
      case "lg":
        fontSizeVariant = 40;
        break;
      case "xl":
        fontSizeVariant = 50;
        break;
      default:
        fontSizeVariant = 20;
        break;
    }
  }
  if (color) {
    switch (color) {
      case "primary":
        colorVariant = theme.colors.blue;
        break;
      default:
        colorVariant = theme.colors.secondaryLightGray;
        break;
    }
  }

  return (
    <StyledTypography
      as={`${showAs}`}
      color={colorVariant}
      fontSize={fontSizeVariant}
      fontSizeMobile={fontSizeMobile}
      fontWeightSize={fontWeightSize}
      font={font}
      align={align}
      display={display}
      fontWeight={fontWeight}
      mobile={mobile}
      textTransform={textTransform}
      {...other}
    >
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  // children: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "inherit", "right", "justify"]),
  variant: PropTypes.oneOf([
    "heading",
    "subheader",
    "subheaderDark",
    "body",
    "placeholder",
    "button",
    "helper",
    "span"
  ]),
  display: PropTypes.oneOf(["initial", "block", "inline"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"])
};
export default withTheme(Typography);
