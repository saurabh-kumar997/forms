import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

const Select = ({
  options,
  onChange,
  error,
  value,
  name,
  helperText,
  label,
  required,
  ...rest
}) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      fullWidth
      error={error}
      name={name}
      required={required}
      {...rest}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

Select.defaultProps = {
  options: [],
  onChange: () => {},
  error: false,
  value: "",
  name: "",
  helperText: "",
  label: "",
  required: false,
};
export default Select;
