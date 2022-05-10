import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from '../Assets/Styles/viewStatusStyles';
import Steppers from '../Components/Steppers';

const ViewStatus = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        <Typography variant='h4' flexGrow={1} mb={2}>
          View Status
        </Typography>
        <Breadcrumbs separator='>'>
          <Button onClick={() => navigate('/app/dashboard')}>Dashboard</Button>
          <Typography textTransform='uppercase'>View Status</Typography>
        </Breadcrumbs>
      </Grid>
      <Card sx={{ boxShadow: 10 }}>
        <Container className={classes.container}>
          <Typography
            variant='h5'
            fontWeight='bold'
            className={classes.blueText}
          >
            Status
          </Typography>
        </Container>
        <Divider />
        <CardContent>
          <Steppers/>
        </CardContent>
      </Card>
    </>
  );
};

export default ViewStatus;
