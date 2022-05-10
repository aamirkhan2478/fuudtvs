import { Box, Card, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import About from '../Assets/Images/about-us.jpg';

const AboutUs = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          mt: 5,
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component='img'
            src={About}
            sx={{
              borderRadius: 10,
              height: { xs: 150, sm: 450 },
              width: { xs: 250, sm: 530, md: 430 },
              mb: { xs: 1 },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card sx={{ boxShadow: 10 }}>
            <Typography variant='h2' textAlign='center' fontWeight='bold'>
              About Us
            </Typography>
            <Divider sx={{ mt: 1, mb: 3 }} />
            <Typography
              variant='body1'
              textAlign='justify'
              mr={1}
              ml={1}
              mb={1}
            >
              Degree tracking system will allow the students to track their
              degree and check the status of their application of degree. This
              will facilitate both the students and the university
              administration. In past the process of applying and receiving the
              degree was manual. That takes lot of time and many students have
              to come to university again and again to check the status of their
              degree .but this system will allow the students to check their
              degree status by sitting at home and they will have to just come
              for once to apply for the degree and then after all the process is
              done to collect the degree/ transcript. The administration will
              also be facilitated by this tracking system so that they will not
              have to face the rush of students every day. The system will also
              provide a better working environment for the administration to
              work in easy and effective way so that they will not have to face
              the rush of students every day. They can save time and work in
              more efficient way.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
