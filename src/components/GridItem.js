import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const GridItem = ({ children }) => {
  return <Grid item>{children}</Grid>;
};

GridItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

GridItem.defaultProps = {
  children: null,
};
export default GridItem;
