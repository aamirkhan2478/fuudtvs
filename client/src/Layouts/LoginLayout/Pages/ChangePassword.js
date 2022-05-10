import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { VisibilityOff, Visibility, LockOpen } from "@mui/icons-material";
import { Form, Formik, Field } from "formik";
import { object, string, ref } from "yup";
import ChangePasswordPic from "../Assets/Images/ChangePass.png";
import LogoPic from "../Assets/Images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../ReusableComponents/Toast";
import { useParams } from "react-router-dom";
import { changePassword } from "../../../Redux/Actions/authAction";
import { LoadingButton } from "@mui/lab";

const ChangePassword = () => {
  const [visible, setVisible] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const initialValues = {
    password: "",
    cpassword: "",
  };
  const dispatch = useDispatch();
  const { authLoading } = useSelector((state) => state.auth);
  const { resetToken } = useParams();
  const clickHandler = (values) => {
    dispatch(changePassword(values, setNotify, resetToken));
  };
  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={ChangePasswordPic}
            alt="Login Pic"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          p={10}
          display="flex"
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Formik
            initialValues={initialValues}
            onSubmit={clickHandler}
            validationSchema={object({
              password: string()
                .required("Password is required!")
                .matches(
                  /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/,
                  "Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!"
                ),
              cpassword: string()
                .oneOf([ref("password"), null], "Password not match!")
                .required("Confirm Password is required!"),
            })}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form>
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
                  </Grid>
                  <Field
                    as={FormControl}
                    variant="outlined"
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      type={visible ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                          >
                            {visible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth
                      name="password"
                      sx={{ mb: 1 }}
                      label="Password"
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                    />
                    <FormHelperText
                      error={
                        Boolean(errors.password) && Boolean(touched.password)
                      }
                    >
                      {Boolean(touched.password) && errors.password}
                    </FormHelperText>
                  </Field>
                  <Field
                    as={FormControl}
                    variant="outlined"
                    error={
                      Boolean(errors.cpassword) && Boolean(touched.cpassword)
                    }
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      type={visible ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setVisible(!visible)}
                            onMouseDown={(e) => e.preventDefault()}
                            edge="end"
                          >
                            {visible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth
                      name="cpassword"
                      label="Confirm Password"
                      error={
                        Boolean(errors.cpassword) && Boolean(touched.cpassword)
                      }
                    />
                    <FormHelperText
                      error={
                        Boolean(errors.cpassword) && Boolean(touched.cpassword)
                      }
                    >
                      {Boolean(touched.cpassword) && errors.cpassword}
                    </FormHelperText>
                  </Field>
                  <LoadingButton
                    loading={authLoading}
                    loadingPosition="start"
                    variant="contained"
                    sx={(theme) => ({
                      mt: 1,
                      color: theme.palette.common.white,
                    })}
                    type="submit"
                    startIcon={<LockOpen />}
                    disabled={!isValid || !dirty}
                  >
                    Change Password
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default ChangePassword;
