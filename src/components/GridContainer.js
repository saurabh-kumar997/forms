import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const GridConatiner = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container>{children}</Grid>
    </Box>
  );
};

GridConatiner.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

GridConatiner.defaultProps = {
  children: null,
};
export default GridConatiner;
