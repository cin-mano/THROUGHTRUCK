import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function AppLayout() {
  return (
    <Box sx={{ display: "flex" }}>
        <Header/>
        <Sidebar/>

      <Box component="main" sx={{ flexGrow: 1, p: 2}}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default AppLayout
