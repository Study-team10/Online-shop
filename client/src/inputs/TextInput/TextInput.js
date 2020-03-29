import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid, Star } from "@components";

const TextArea = styled.textarea`
  border: "2px solid orange";
  font-size: 20px;
  border-radius: 10px;
  padding-left: 31px;
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 400;
  &:focus {
    outline: none !important;
    border-radius: 10px;
  }
  &::placeholder {
    font-family: "Montserrat";
  }
`;

const Input = styled.input`
  font-family: "Montserrat";
  box-sizing: border-box;
  position: relative;
  /* padding-left: 31px;
  height: 50px; */
  padding: 15px 5px 15px 30px;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  line-height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryLightGray};
  border-radius: 10px;
  opacity: 1;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 18px;
  &:focus {
    line-height: 24px;
    outline: none !important;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }
  &::placeholder {
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondaryLightGray};
    line-height: 24px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const TextInput = ({
  value,
  name,
  id,
  handleChange,
  multiline = false,
  rows,
  fullWidth = false,
  disablePaste = false,
  variant,
  type,
  field,
  required = false,
  disabled = false,
  placeholder,
  style,
  ...other
}) => {
  return (
    <Grid style={style}>
      {multiline ? (
        <TextArea
          name={name}
          onChange={handleChange}
          fullWidth={fullWidth}
          variant={variant}
          disabled={disabled}
          rows={rows}
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          {...other}
        />
      ) : (
        <Grid style={style}>
          <Grid style={{ position: "relative", margin: 10 }}>
            {required && <Star />}
            <Input
              name={name}
              type={type}
              id={id}
              multiline={multiline}
              value={value}
              onChange={handleChange}
              fullWidth={fullWidth}
              onPaste={e => {
                if (disablePaste) {
                  e.preventDefault();
                }
              }}
              variant={variant}
              disabled={disabled}
              placeholder={placeholder}
              {...other}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disablePaste: PropTypes.bool,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default TextInput;
