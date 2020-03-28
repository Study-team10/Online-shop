import { setNestedObjectValues } from "@util/utils";
const formikReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload
        }
      };
    case "SET_FIELD_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload
        }
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload
      };
    case "SET_ISVALID":
      return {
        ...state,
        isValid: action.payload
      };
    case "SUBMIT_ATTEMPT":
      return {
        ...state,
        isSubmitting: true,
        touched: setNestedObjectValues(state.values, true)
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        submitError: "Post submited"
      };
    case "SUBMIT_FAILURE":
      return {
        ...state,
        isSubmitting: false,
        submitError: action.payload
      };

    default:
      return state;
  }
};

export default formikReducer;
