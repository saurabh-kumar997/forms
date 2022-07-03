import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";

const CustomRadio = ({
  required,
  name,
  value,
  defaultValue,
  label,
  error,
  row,
  onChange,
  options,
}) => {
  return (
    <FormControl error={error} required={required}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name={name}
        row={row}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

CustomRadio.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  row: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf([]),
};

CustomRadio.defaultProps = {
  required: false,
  name: "",
  value: "",
  defaultValue: "",
  label: "",
  error: false,
  row: false,
  onChange: () => {},
  options: [],
};
export default CustomRadio;
