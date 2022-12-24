import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'

export const DashboardProtected =()=>{
    return localStorage.getItem('authToken')?<Outlet/>:<Navigate to='/login/app'/> 
}
export const LoginProtected =()=>{
    return !localStorage.getItem('authToken')?<Outlet/>:<Navigate to='/app/dashboard'/> 
}
