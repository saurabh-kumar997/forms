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
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

const SelectTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
Select.propTypes = {
  options: PropTypes.arrayOf(SelectTypes),
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
