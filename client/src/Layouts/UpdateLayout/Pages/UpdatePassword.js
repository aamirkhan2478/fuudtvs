import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility, LockOpen } from "@mui/icons-material";
import { Form, Formik, Field } from "formik";
import { object, string, ref } from "yup";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../ReusableComponents/Toast";
import { useNavigate, useParams } from "react-router-dom";
import { userChangePassword } from "../../../Redux/Actions/changePasswordAction";
import { LoadingButton } from "@mui/lab";

const UpdatePassword = () => {
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
  const { change_password_loading } = useSelector(
    (state) => state.changepassword
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const clickHandler = (values) => {
    dispatch(userChangePassword(values, id, setNotify, navigate));
  };
  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 30,
        }}
      >
        <Card sx={{ boxShadow: 10, width: 400 }}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5">Update Password</Typography>
          </Container>
          <Divider />
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
                <CardContent>
                  <Stack>
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
                          Boolean(errors.cpassword) &&
                          Boolean(touched.cpassword)
                        }
                      />
                      <FormHelperText
                        error={
                          Boolean(errors.cpassword) &&
                          Boolean(touched.cpassword)
                        }
                      >
                        {Boolean(touched.cpassword) && errors.cpassword}
                      </FormHelperText>
                    </Field>
                  </Stack>
                </CardContent>
                <Divider />
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <LoadingButton
                    loading={change_password_loading}
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
                </CardActions>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
};

export default UpdatePassword;
