import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function App() {
  return (
    // <Button variant='contained' color='primary'sx={{m:2}}>Hello World</Button>
    <Box sx={{ borderTop: "1px solid", borderColor: "divider", p: 2 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Your Company
      </Typography>
    </Box>
  )
}

export default App
