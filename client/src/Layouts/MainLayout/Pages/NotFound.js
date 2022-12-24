import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Error from "../Assets/Images/404.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography align="center" color="textPrimary" variant="h4">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography align="center" color="textPrimary" variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                alt="Under development"
                src={Error}
                style={{
                  marginTop: 50,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 560,
                }}
              />
            </Box>
            <Button
              startIcon={<ArrowBack fontSize="small" />}
              sx={(theme) => ({ mt: 3, color: theme.palette.common.white })}
              variant="contained"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
