import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
const InputTextGroup = ({
  id,
  label,
  name,
  className,
  margin,
  placeholder,
  value,
  type,
  validators,
  errorMessages,
  onChange
}) => {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      className={className}
      margin={margin}
      value={value}
      type={type}
      margin={margin}
      placeholder={placeholder}
      onChange={onChange}
      validators={[validators]}
      errorMessages={[errorMessages]}
    />
  );
};
InputTextGroup.propTypes = {
  id: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validators: PropTypes.array.isRequired,
  errorMessages: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};
InputTextGroup.defaultProps = {
  type: "text",
  value: "",
  validators: ["", ""],
  errorMessages: ["", ""]
};
export default InputTextGroup;
