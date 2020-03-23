import PropTypes from "prop-types";
import React from "react";
import { Grid } from "@components";
import styled from "styled-components";
//  button variants
import Default from "./Variants/Default";
import Contained from "./Variants/Contained";
import Outlined from "./Variants/Outlined";
import Text from "./Variants/Text";

const Button = ({ children, variant, size = "lg", ...props }) => {
  const components = {
    text: Text,
    outlined: Outlined,
    contained: Contained
  };

  const content = (
    <Grid container justify="center" alignItems="center">
      {children}
    </Grid>
  );

  if (variant) {
    const TagName = components[variant];
    return (
      <TagName size={size} {...props}>
        {content}
      </TagName>
    );
  }
  return (
    <Default size={size} {...props}>
      {content}
    </Default>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  textTransform: PropTypes.oneOf(["uppercase"]),
  fontWeight: PropTypes.oneOf(["thin", "medium", "bold"]),
  rounded: PropTypes.oneOf(["elipse", "corners"])
};

export default Button;
