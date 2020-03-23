import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGrid = styled.div`
  display: ${props => (props.container ? "flex" : "block")};
  flex-wrap: ${props => (props.wrap === "wrap" ? "wrap" : props.wrap)};
  flex-direction: ${props =>
    props.direction === "column" ? "column" : props.direction};
  justify-content: ${props =>
    props.justify === "flex-start" ? "flex-start" : props.justify};
  align-items: ${props =>
    props.alignItems === "stretch" ? "stretch" : props.alignItems};
  align-content: ${props =>
    props.alignContent === "stretch" ? "stretch" : props.alignContent};
  text-align: ${props =>
    props.textAlign === "center" ? "center" : props.textAlign};
  @media all and (max-width: 600px) and (min-width: 0), (min-width: 601px) {
    width: ${props => (props.xs ? `calc(${props.xs}*(100%/12) )` : "auto")};
  }
  @media all and (max-width: 960px) and (min-width: 601px), (min-width: 961px) {
    width: ${props => (props.sm ? `calc(${props.sm}*(100%/12) )` : props.xs)};
  }
  @media all and (max-width: 1280px) and (min-width: 961px),
    (min-width: 1281px) {
    width: ${props => (props.md ? `calc(${props.md}*(100%/12) )` : props.xs)};
  }
  @media all and (max-width: 1920px) and (min-width: 1280px),
    (min-width: 1921px) {
    width: ${props => (props.lg ? `calc(${props.lg}*(100%/12) )` : props.xs)};
  }
  @media (min-width: 1922px) {
    width: ${props => (props.xl ? `calc(${props.xl}*(100%/12) )` : props.xs)};
  }
`;

const Grid = ({
  children,
  justify = "flex-start",
  alignItems = "flex-start",
  alignContent = "stretch",
  container = false,
  item = false,
  direction = "row",
  xs = false,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  wrap = "nowrap",
  style
}) => {
  return (
    <StyledGrid
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      container={container}
      item={item}
      direction={direction}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      wrap={wrap}
      style={style}
    >
      {children}
    </StyledGrid>
  );
};

Grid.propTypes = {
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "stretch",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  container: PropTypes.bool,
  item: PropTypes.bool,
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  xs: PropTypes.oneOf([false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([false, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};
export default Grid;
export { StyledGrid };
