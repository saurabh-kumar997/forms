import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Forms
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <Outlet>{children}</Outlet>
        </Box>
      </Container>
    </React.Fragment>
  );
}
