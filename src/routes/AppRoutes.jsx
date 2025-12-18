import React from 'react'
import AppLayout from '../layout/AppLayout'
import Dashboard from '../pages/Dashboard'
import UsersList from '../pages/UsersList'
import { Navigate, Route, Routes } from 'react-router-dom'
import VehcilesList from '../pages/VehiclesList'

function AppRoutes() {
  return (
    <Routes>
        <Route element={<AppLayout/>}>
        <Route index element = {<Dashboard/>}/>
        <Route path = 'users' element = {<UsersList/>}/>
        <Route path = 'vehicles' element = {<VehcilesList/>}/>
        <Route path = '*' element = {<Navigate to = '/' replace/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes
