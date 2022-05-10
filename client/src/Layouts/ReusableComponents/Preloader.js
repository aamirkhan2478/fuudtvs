import { Bars } from 'react-loader-spinner';
import React from 'react';
import { Box, Container } from '@mui/material';

const Preloader = () => {
  return (
    <Container sx={{ display: 'grid', placeItems: 'center' }}>
      <Box component='div'>
        <Bars color='#27ae60' height={80} width={80} />
      </Box>
    </Container>
  );
};

export default Preloader;
