import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { HistoryEdu, Lock } from "@mui/icons-material";
import useStyles from "../Assets/Styles/dashboardStyles";
import Profile from "../Assets/Images/profile.svg";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../../ReusableComponents/Preloader";
import { useNavigate } from "react-router-dom";
import { showDegreeApplications } from "../../../Redux/Actions/degreeApplicationAction";
import {
  appliedPhysicsCount,
  businessCount,
  chemistryCount,
  commerceCount,
  csCount,
  islamiatCount,
  lawCount,
  physicsCount,
  economicCount,
  electricalCount,
  englishCount,
  mechanicalCount,
  mathCount,
  urduCount,
  softwareCount,
  internationalCount,
  feeSectionCount,
  libraryCount,
  inchargeCampusCount,
  examCount,
} from "../../../Redux/Actions/countAction";

const Dashboard = () => {
  const classes = useStyles();
  const { authLoading, user } = useSelector((state) => state.auth);
  const { show_degree_applications } = useSelector(
    (state) => state.degreeapplications
  );
  const {
    chemistry_count,
    commerce_count,
    law_count,
    islamiat_count,
    physics_count,
    applied_physics_count,
    cs_count,
    business_count,
    economics_count,
    electrical_count,
    english_count,
    mechanical_count,
    mathematics_count,
    urdu_count,
    software_count,
    international_relations_count,
    fee_section_count,
    library_count,
    incharge_campus_count,
    examination_count,
  } = useSelector((state) => state.count);
  const query = "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role === "Admin") {
      dispatch(showDegreeApplications(query));
    }
    if (user.role === "Head Of Chemistry Department") {
      dispatch(chemistryCount());
    }
    if (user.role === "Head Of Commerce Department") {
      dispatch(commerceCount());
    }
    if (user.role === "Head Of Law Department") {
      dispatch(lawCount());
    }
    if (user.role === "Head Of Islamiat Department") {
      dispatch(islamiatCount());
    }
    if (user.role === "Head Of Physics Department") {
      dispatch(physicsCount());
    }
    if (user.role === "Head Of Applied Physics Department") {
      dispatch(appliedPhysicsCount());
    }
    if (user.role === "Head Of Computer Science Department") {
      dispatch(csCount());
    }
    if (user.role === "Head Of Business Department") {
      dispatch(businessCount());
    }
    if (user.role === "Head Of Economics Department") {
      dispatch(economicCount());
    }
    if (user.role === "Head Of Electrical Engineering Department") {
      dispatch(electricalCount());
    }
    if (user.role === "Head Of English Department") {
      dispatch(englishCount());
    }
    if (user.role === "Head Of Mechanical Engineering Department") {
      dispatch(mechanicalCount());
    }
    if (user.role === "Head Of Mathematics Department") {
      dispatch(mathCount());
    }
    if (user.role === "Head Of Urdu Department") {
      dispatch(urduCount());
    }
    if (user.role === "Head Of Software Engineering Department") {
      dispatch(softwareCount());
    }
    if (user.role === "Head Of International Relations Department") {
      dispatch(internationalCount());
    }
    if (user.role === "Fee Section") {
      dispatch(feeSectionCount());
    }
    if (user.role === "Library") {
      dispatch(libraryCount());
    }
    if (user.role === "Incharge Campus") {
      dispatch(inchargeCampusCount());
    }
    if (user.role === "Examination Department") {
      dispatch(examCount());
    }
  }, [user.role]);

  const adminDashboard = (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Card sx={{ boxShadow: 10, width: 500 }}>
            <Typography variant="h4" textAlign="center">
              Your Profile
            </Typography>
            <Divider />
            <CardContent>
              <Grid container display="flex" flexWrap="wrap">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                    component="img"
                    src={Profile}
                    alt="Avatar"
                    height={230}
                    width={200}
                  />
                </Grid>
                <Grid item xs={12} sm={12} display="flex" alignItems="center">
                  <Container>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mb={1}
                    >
                      Username:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.userid}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      Name:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.name}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      Email:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.email}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      CNIC:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.cnic}
                      </Typography>
                    </Typography>
                  </Container>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                variant="contained"
                startIcon={<Lock />}
                fullWidth
                sx={(theme) => ({ color: theme.palette.common.white })}
                onClick={() => navigate(`/update/update-password/${user._id}`)}
              >
                Change Password
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
          <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
            <Container>
              <Stack
                direction="row"
                spacing={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="h1" className={classes.textGreen}>
                  {show_degree_applications.length}
                </Box>
                <Box component="h1" className={classes.textGreen}>
                  Applications
                </Box>
                <HistoryEdu fontSize="large" color="primary" />
              </Stack>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </>
  );
  const studentDashboard = (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Card sx={{ boxShadow: 10, width: 500 }}>
            <Typography variant="h4" textAlign="center">
              Your Profile
            </Typography>
            <Divider />
            <CardContent>
              <Grid container display="flex" flexWrap="wrap">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                    component="img"
                    src={Profile}
                    alt="Avatar"
                    height={230}
                    width={200}
                  />
                </Grid>
                <Grid item xs={12} sm={12} display="flex" alignItems="center">
                  <Container>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mb={1}
                    >
                      MIS ID:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.userid}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      Name:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.name}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      Email:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.email}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      CNIC:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.cnic}
                      </Typography>
                    </Typography>
                  </Container>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                variant="contained"
                startIcon={<Lock />}
                fullWidth
                sx={(theme) => ({ color: theme.palette.common.white })}
                onClick={() => navigate(`/update/update-password/${user._id}`)}
              >
                Change Password
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
  const userDashboard = (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Card sx={{ boxShadow: 10, width: 500 }}>
            <Typography variant="h4" textAlign="center">
              Your Profile
            </Typography>
            <Divider />
            <CardContent>
              <Grid container display="flex" flexWrap="wrap">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                    component="img"
                    src={Profile}
                    alt="Avatar"
                    height={230}
                    width={200}
                  />
                </Grid>
                <Grid item xs={12} sm={12} display="flex" alignItems="center">
                  <Container>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mb={1}
                    >
                      Username:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.userid}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      Name:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.name}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      Email:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.email}
                      </Typography>
                    </Typography>
                    <Divider />
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      fontSize={20}
                      mt={1}
                      mb={1}
                    >
                      CNIC:{" "}
                      <Typography variant="span" className={classes.textBlue}>
                        {user.cnic}
                      </Typography>
                    </Typography>
                  </Container>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                variant="contained"
                startIcon={<Lock />}
                fullWidth
                sx={(theme) => ({ color: theme.palette.common.white })}
                onClick={() => navigate(`/update/update-password/${user._id}`)}
              >
                Change Password
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {user.role === "Fee Section" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {fee_section_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Library" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {library_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Incharge Campus" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {incharge_campus_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Examination Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {examination_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Computer Science Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {cs_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Urdu Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {urdu_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Islamiat Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {islamiat_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Law Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {law_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Economics Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {economics_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Business Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {business_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Commerce Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {commerce_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Applied Physics Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {applied_physics_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Electrical Engineering Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {electrical_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Mathematics Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {mathematics_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Software Engineering Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {software_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of International Relations Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {international_relations_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of English Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {english_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Physics Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {physics_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Chemistry Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {chemistry_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
        {user.role === "Head Of Mechanical Engineering Department" && (
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mt: { xs: 1 } }}>
            <Card sx={{ boxShadow: 10, width: { sm: 497 }, ml: { lg: 2 } }}>
              <Container>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box component="h1" className={classes.textGreen}>
                    {mechanical_count}
                  </Box>
                  <Box component="h1" className={classes.textGreen}>
                    Applications
                  </Box>
                  <HistoryEdu fontSize="large" color="primary" />
                </Stack>
              </Container>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
  return (
    <>
      <Typography variant="h4" mb={5}>
        Dashboard
      </Typography>
      {authLoading === true ? (
        <Preloader />
      ) : user.role === "Admin" ? (
        adminDashboard
      ) : user.role === "Student" ? (
        studentDashboard
      ) : (
        userDashboard
      )}
    </>
  );
};

export default Dashboard;
