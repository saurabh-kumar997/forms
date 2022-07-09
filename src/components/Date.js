import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";

const CustomDatePicker = ({
  label,
  value,
  required,
  error,
  onChange,
  disabled,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params) => (
          <TextField {...params} required={required} error={error} />
        )}
      />
    </LocalizationProvider>
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

CustomDatePicker.defaultProps = {
  label: "",
  value: "",
  required: false,
  error: false,
  onChange: () => {},
};
export default CustomDatePicker;
