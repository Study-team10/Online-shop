import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextInput, CheckboxInput, RadioInput, SelectInput } from "@inputs";

const components = {
  TextInput: TextInput,
  CheckboxInput: CheckboxInput,
  RadioInput: RadioInput,
  SelectInput: SelectInput
};

const Field = ({ component, type = "text", ...other }) => {
  if (component) {
    const TagName = components[component];
    return <TagName type={type} {...other} />;
  }

  return (
    <div>
      <input type={type} {...other} />
    </div>
  );
};

Field.propTypes = {
  component: PropTypes.elementType,
  type: PropTypes.string
};

export default Field;
