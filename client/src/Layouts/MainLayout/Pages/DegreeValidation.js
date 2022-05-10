import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Search, ReportProblem } from "@mui/icons-material";
import useStyles from "../Assets/Styles/degreeValidationStyle";
import Logo from "../Assets/Images/logoa.png";
import { useDispatch, useSelector } from "react-redux";
import { showSuccessApplication } from "../../../Redux/Actions/validationAction";
import Preloader from "../../ReusableComponents/Preloader";

const DegreeValidation = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const { degree_loading, show_success_application } = useSelector(
    (state) => state.validation
  );
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(showSuccessApplication(searchQuery, setVisible));
  };

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    setVisible(false);
  };
  return (
    <Container>
      <Typography
        variant="h3"
        textAlign="center"
        mt={3}
        textTransform="capitalize"
        color="blue"
        fontWeight="bold"
      >
        Enter MID ID to see the details of student
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12}>
          <FormControl
            variant="outlined"
            sx={{ ml: { xs: 2.5, sm: "23%" }, width: { xs: 300, sm: 600 } }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Enter MIS ID
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="number"
              onChange={changeHandler}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  clickHandler(e);
                }
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={clickHandler}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
              label="Enter MIS ID"
            />
          </FormControl>
        </Grid>
        {degree_loading ? (
          <Preloader />
        ) : visible ? (
          <>
            {!show_success_application ? (
              <Grid item>
                <Box component="div" className={classes.box}>
                  <ReportProblem color="error" sx={{ fontSize: 85 }} />
                  <Typography variant="h2" color="#c0392b">
                    Data Not Found
                  </Typography>
                </Box>
              </Grid>
            ) : (
              <Grid item>
                <Box component="div" className={classes.box}>
                  <Container>
                    <Stack direction="row" sx={{ mt: 2, mb: 2 }}>
                      <Box
                        component="img"
                        src={Logo}
                        alt="logo"
                        height={120}
                        width={120}
                        sx={{ mr: { sm: 1 } }}
                      />
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                      >
                        Student Details
                      </Typography>
                      <Avatar
                        sx={{ height: 120, width: 120, ml: { sm: 1 } }}
                        src={show_success_application.image}
                      />
                    </Stack>
                    <Stack
                      direction="column"
                      sx={{
                        textAlign: "justify",
                      }}
                    >
                      <Typography variant="body1" fontWeight="bold">
                        Name:
                        <Typography variant="span" color="blue" ml={1}>
                          {show_success_application.stdName}
                        </Typography>
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        Email:
                        <Typography variant="span" color="blue" ml={1}>
                          {show_success_application.email}
                        </Typography>
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        Program:
                        <Typography variant="span" color="blue" ml={1}>
                          {show_success_application.program}
                        </Typography>
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        Department:
                        <Typography variant="span" color="blue" ml={1}>
                          {show_success_application.department}
                        </Typography>
                      </Typography>
                      <Typography variant="body1" fontWeight="bold" mb={1}>
                        Session:
                        <Typography variant="span" color="blue" ml={1}>
                          {show_success_application.session}
                        </Typography>
                      </Typography>
                    </Stack>
                  </Container>
                </Box>
              </Grid>
            )}
          </>
        ) : null}
      </Grid>
    </Container>
  );
};

export default DegreeValidation;
