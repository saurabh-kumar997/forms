import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectMultiple = ({
  name,
  label,
  error,
  required,
  options,
  value,
  onChange,
}) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth error={error} required={required}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        name={name}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((sel) => (
              <Chip key={sel} label={sel} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
        fullWidth
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            style={{ fontWeight: theme.typography.fontWeightMedium }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const SelectTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
SelectMultiple.propsType = {
  options: PropTypes.arrayOf(SelectTypes),
  onChange: PropTypes.func,
  error: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

SelectMultiple.defaultProps = {
  options: [],
  onChange: () => {},
  error: false,
  value: "",
  name: "",
  helperText: "",
  label: "",
  required: false,
};
export default SelectMultiple;
