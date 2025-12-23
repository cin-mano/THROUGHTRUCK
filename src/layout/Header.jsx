import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Header({ drawerWidth }) {

    return (
        <AppBar
          position="fixed"
          sx={{
            height: 56,
            justifyContent: 'center',
            ml: { sm: `${drawerWidth+80}px` },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              px: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/* Left side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalShippingIcon />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  whiteSpace: 'nowrap',
                }}
              >
                THROUGH_TRUCK
              </Typography>
            </Box>
    
            {/* Right side */}
            <Tooltip title="Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      );
}
export default Header;