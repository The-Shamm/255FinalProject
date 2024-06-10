import { Box, ListItemText, ListItemButton, ListItemIcon, Switch } from "@mui/material"; 
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBox from "@mui/icons-material/AccountBox";
import Settings from "@mui/icons-material/Settings";
import PersonIcon from '@mui/icons-material/Person';
import Person from "@mui/icons-material/Person";
import ModeNightIcon from '@mui/icons-material/ModeNight';

import Add from "@mui/icons-material/Add";
import ModeNight from "@mui/icons-material/ModeNight";

const Sidebar = ({mode, setMode}) => {
  return (
    <Box
      bgcolor="primary.main"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home"> 
            <ListItemIcon>
              <HomeIcon /> 
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list"> 
            <ListItemIcon>
              <Add /> 
            </ListItemIcon>
            <ListItemText primary="addition" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list"> 
            <ListItemIcon>
              <Person /> 
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list"> 
            <ListItemIcon>
              <Settings /> 
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list"> 
            <ListItemIcon>
              <AccountBox /> 
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list"> 
            <ListItemIcon>
              <ModeNight /> 
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} defaultChecked color="secondary" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
