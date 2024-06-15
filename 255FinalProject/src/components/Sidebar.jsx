import { Box, ListItemText, ListItemButton, ListItemIcon, Switch } from "@mui/material"; 
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Settings from "@mui/icons-material/Settings";
import Person from '@mui/icons-material/Person';
import ModeNight from '@mui/icons-material/ModeNight';
import Add from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box 
      bgcolor="primary.main"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="sticky">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/"> 
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Team-Repo"> 
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Team Repository" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/service-teams"> 
              <ListItemIcon>
              <Add />
              </ListItemIcon>
              <ListItemText primary="Update Teams" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/profile"> 
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} defaultChecked color="secondary" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
