import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";

const RadioInput = ({ checked, label, ...props }) => {
  const RadioContainer = styled.div`
    vertical-align: middle;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;

  const HiddenRadio = styled.input.attrs({ type: "radio" })`
    position: absolute;
    opacity: 0;
    cursor: pointer;
  `;

  const CustomRadioBtn = styled.span`
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
  `;

  const StyledRadio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid
      ${({ theme, checked }) =>
      checked ? theme.colors.orange : theme.colors.lightOrange};
    transition: all 150ms;
    border-radius: 50%;

    ${CustomRadioBtn} {
      visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
    }
  `;
  return (
    <label>
      <RadioContainer>
        <StyledRadio checked={checked}>
          <HiddenRadio checked={checked} {...props} />
          <CustomRadioBtn />
        </StyledRadio>
        <Typography style={{ marginLeft: 8 }} display="inline" variant="body">
          {label}
        </Typography>
      </RadioContainer>
    </label>
  );
};

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

export default RadioInput;
