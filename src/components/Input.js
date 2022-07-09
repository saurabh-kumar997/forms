import * as React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const Input = ({
  name,
  value,
  type,
  onChange,
  variant,
  error,
  label,
  required,
  ...rest
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant={variant}
      error={error}
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      required={required}
      fullWidth
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  error: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  value: "",
  type: "",
  onChange: () => {},
  variant: "outlined",
  error: false,
  label: "",
  required: false,
};

export default Input;
