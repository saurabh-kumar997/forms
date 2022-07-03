import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";

const CustomSwitch = ({ label, labelPlacement, onChange, checked, value }) => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        value={value}
        control={<Switch color="primary" />}
        label={label}
        labelPlacement={labelPlacement}
        checked={checked}
        onChange={onChange}
      />
    </FormControl>
  );
};
CustomSwitch.propTpes = {
  label: PropTypes.string,
  labelPlacement: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

CustomSwitch.defaultProps = {
  label: "",
  labelPlacement: "start",
  onChange: () => {},
  checked: false,
  value: "",
};
export default CustomSwitch;
