import React from "react";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  const theme = useTheme();

  const isCompact = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = isCompact ? 72 : 240;

  return (
    <Box sx={{ display: "flex" }}>
      <Header drawerWidth={drawerWidth} />

      <Sidebar
        drawerWidth={drawerWidth}
        isCompact={isCompact}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default AppLayout;
