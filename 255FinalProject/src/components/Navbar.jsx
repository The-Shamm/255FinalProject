import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/icons-material/Menu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          color="secondary.main"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Navigation
        </Typography>
        <Menu
          
          sx={{
            display: { xs: "block", sm: "none" },
            "&:hover": { color: "white" },
          }}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
