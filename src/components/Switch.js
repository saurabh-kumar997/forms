import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";

const CustomSwitch = ({
  label,
  labelPlacement,
  onChange,
  checked,
  value,
  ...rest
}) => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        value={value}
        control={<Switch color="primary" />}
        label={label}
        labelPlacement={labelPlacement}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
    </FormControl>
  );
};
CustomSwitch.propTpes = {
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  onChange: PropTypes.func,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string,
};

CustomSwitch.defaultProps = {
  label: "",
  labelPlacement: "start",
  onChange: () => {},
  value: "",
};
export default CustomSwitch;
