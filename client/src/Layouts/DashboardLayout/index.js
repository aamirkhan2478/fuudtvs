import { CssBaseline, Box, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const DashboardLayout = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar setVisible={setVisible} visible={visible}/>
        <Sidebar visible={visible} />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
