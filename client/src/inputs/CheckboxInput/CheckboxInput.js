import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Grid } from "../../components";
// import Check from "../../../public/static/icons/check.svg";

const CheckboxInput = ({ checked, label, value, ...props }) => {
  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 6px;
    padding: 0;
    width: 27px;
    height: 27px;
  `;

  const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    display: none;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 27px;
    height: 27px;
    margin: 0;
    padding: 0;
  `;

  const StyledCheckbox = styled.div`
    display: inline-block;
    width: 27px;
    height: 27px;
    margin: 0;
    padding: 0;
    border: 1px solid
      ${({ theme, checked }) =>
        checked ? theme.colors.orange : theme.colors.lightOrange};
    border-radius: 5px;
    transition: all 150ms;
    ${HiddenCheckbox}:focus + & {
      border: 1px solid ${({ theme }) => theme.colors.orange};
    }
    cursor: pointer;

    ${HiddenCheckbox}:disabled + & {
      border: 1px solid #ccc;
    }
  `;

  return (
    <label>
      <CheckboxContainer>
        <HiddenCheckbox checked={value} {...props} />
        <StyledCheckbox checked={value}>
          {value && (
            // <Icon color="orange" size="50px">
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ width: "100%", height: "100%" }}
            >
              <Grid style={{ width: "16px", height: "16px" }}>
                {/* <Check
                  style={{ fill: "orange", width: "14px", height: "14px" }}
                /> */}
              </Grid>
            </Grid>

            // </Icon>
          )}
        </StyledCheckbox>
      </CheckboxContainer>

      <Typography
        mobile={props.mobile}
        style={{ marginLeft: 8 }}
        display="inline"
        variant="body"
      >
        {label}
      </Typography>
    </label>
  );
};

CheckboxInput.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.bool
};
export default CheckboxInput;
