import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";

function Sidebar({ drawerWidth, isCompact }) {
  return (
    <Drawer
      variant={"permanent"}
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          overflowX: "hidden",
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{
            justifyContent: isCompact ? "center" : "flex-start",
            px: isCompact ? 1 : 2,
          }}
        >
          <ListItemIcon sx={{ minWidth: isCompact ? 0 : 40 }}>
            <DashboardIcon />
          </ListItemIcon>
          {!isCompact && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/users"
          sx={{
            justifyContent: isCompact ? "center" : "flex-start",
            px: isCompact ? 1 : 2,
          }}
        >
          <ListItemIcon sx={{ minWidth: isCompact ? 0 : 40 }}>
            <PeopleIcon />
          </ListItemIcon>
          {!isCompact && <ListItemText primary="Users" />}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
