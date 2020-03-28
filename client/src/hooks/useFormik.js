import React from "react";
import formikReducer from "../reducers/formikReducer";

const useFormik = props => {
  if (!props.onSubmit) {
    throw new Error("You forgot to pass on submit to useFormik");
  }
  const [state, dispatch] = React.useReducer(formikReducer, {
    values: props.initialValues,
    errors: [],
    touched: {},
    isSubmitting: false,
    isValid: false
  });
  // console.log(state.values);
  React.useEffect(() => {
    if (props.validationSchema) {
      const errors = validate(state.values);
      dispatch({ type: "SET_ERRORS", payload: errors });
    }
  }, [state.values]);

  const validate = values => {
    let errors = {};
    const schema = props.validationSchema;
    schema
      .validate(values, { abortEarly: false })
      .then(() => dispatch({ type: "SET_ISVALID", payload: true }))
      .catch(err => {
        err.inner.map(item => {
          errors[item.path] = item.errors[0];
        });
        dispatch({ type: "SET_ISVALID", payload: false });
      });
    return errors;
  };

  const handleChange = fieldName => event => {
    event.persist();
    let value = () => {
      switch (event.target.type) {
        case "checkbox":
          return event.target.checked;

        case "radio":
          return event.target.name;

        default:
          return event.target.value;
      }
    };

    const result = value();
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: { [fieldName]: result }
    });
  };

  const handleBlur = fieldName => event => {
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: { [fieldName]: true }
    });
  };

  const getFieldProps = fieldName => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName)
  });

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch({ type: "SUBMIT_ATTEMPT" });
    //validate
    const errors = validate(state.values);
    if (state.isValid) {
      try {
        await props.onSubmit(state.values);
        dispatch({ type: "SUBMIT_SUCCESS" });
      } catch (submitError) {
        dispatch({ type: "SUBMIT_FAILURE", payload: "API mistake" });
      }
    } else {
      dispatch({ type: "SET_ERRORS", payload: errors });
      dispatch({ type: "SUBMIT_FAILURE", payload: "Submit failed" });
    }

    //mark each field as touched
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldProps,
    ...state
  };
};

export default useFormik;
