import React, { useState } from "react";
import useStyles from "../Assets/Styles/style";
import ForgetPasswordPic from "../Assets/Images/forgetpass.jpg";
import LogoPic from "../Assets/Images/Logo.png";
import { Grid, Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LockOpen } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Form, Formik, Field } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../../Redux/Actions/authAction";
import Toast from "../../ReusableComponents/Toast";

const ForgetPassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { authLoading } = useSelector((state) => state.auth);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  const initialValues = {
    email: "",
  };

  const clickHandler = (values, formikHelpers) => {
    dispatch(forgetPassword(values, formikHelpers, setNotify));
  };

  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={ForgetPasswordPic}
            alt="ForgetPassword Pic"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          p={10}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
        >
          <Box component="div" />
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: 300,
              maxWidth: 400,
            }}
          >
            <Grid container justifyContent="center">
              <Box component="img" src={LogoPic} alt="Logo" width={120} />
              <Typography variant="body1">
                {" "}
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </Typography>
            </Grid>
            <Formik
              initialValues={initialValues}
              onSubmit={clickHandler}
              onKeyPress={(e, values, formikHelpers) => {
                if (e.key === "Enter") {
                  clickHandler(values, formikHelpers);
                }
              }}
              validationSchema={object({
                email: string()
                  .required("Email is required")
                  .email("Invalid Email"),
              })}
            >
              {({ errors, touched, dirty, isValid }) => (
                <Form>
                  <Field
                    as={TextField}
                    variant="outlined"
                    label="Email"
                    type="email"
                    name="email"
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                    fullWidth
                  />
                  <LoadingButton
                    loading={authLoading}
                    loadingPosition="start"
                    variant="contained"
                    sx={(theme) => ({
                      mt: 1,
                      mb: { xs: 1 },
                      color: theme.palette.common.white,
                    })}
                    startIcon={<LockOpen />}
                    type="submit"
                    fullWidth
                    disabled={!isValid || !dirty}
                  >
                    Forget Password
                  </LoadingButton>
                </Form>
              )}
            </Formik>
          </Box>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/login/app" className={classes.navlink}>
                Go To Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgetPassword;
