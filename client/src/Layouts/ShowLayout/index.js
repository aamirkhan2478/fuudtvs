import React from 'react';
import { Outlet } from 'react-router-dom';

const ShowLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ShowLayout;
