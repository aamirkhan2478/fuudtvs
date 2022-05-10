import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Dashboard, Login, School } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useStyles from "../Assets/Styles/homeStyle";

const Home = () => {
  const classes = useStyles();
  const auth = localStorage.getItem("authToken");
  const navigate = useNavigate();
  return (
    <>
      <Box className={classes.landing}>
        <Box className={classes.darkOverlay}>
          <Box className={classes.landingInner}>
            <Typography
              variant="h1"
              fontSize="4rem"
              lineHeight={1.2}
              marginBottom="1rem"
            >
              <School sx={{ mr: 1, fontSize: 80 }} />
              FUUDTVS
            </Typography>
            <Typography variant="body1" fontSize="1.5rem" marginBottom="1rem">
              Degree tracking system will allow the students to track their
              degree and check the status of their application of degree.
            </Typography>
            {auth ? (
              <Button
                variant="contained"
                sx={(theme) => ({
                  color: theme.palette.common.white,
                })}
                startIcon={<Dashboard />}
                onClick={() => navigate("/app/dashboard")}
              >
                Dashboard
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={(theme) => ({ color: theme.palette.common.white })}
                startIcon={<Login />}
                onClick={() => navigate("/login/app")}
              >
                Login
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
