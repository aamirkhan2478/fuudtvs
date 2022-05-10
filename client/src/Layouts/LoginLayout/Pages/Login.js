import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { VisibilityOff, Visibility, LoginOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginPic from "../Assets/Images/login.jpg";
import LogoPic from "../Assets/Images/Logo.png";
import useStyles from "../Assets/Styles/style";
import Toast from "../../ReusableComponents/Toast";
import { loginUser } from "../../../Redux/Actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const { authLoading } = useSelector((state) => state.auth);
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });
  const [user, setUser] = useState({
    userid: "",
    password: "",
  });
  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    const { value, name } = e.target;
    setUser((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, setNotify, navigate));
  };
  return (
    <>
      <Toast notify={notify} setNotify={setNotify} />
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6} display="flex">
          <Box
            component="img"
            src={LoginPic}
            alt="Login Pic"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
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
            </Grid>
            <TextField
              name="userid"
              value={user.userid}
              onChange={onchangeHandler}
              variant="outlined"
              label="Username/MIS ID"
              type="text"
              margin="normal"
              fullWidth
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                label="Password"
                name="password"
                value={user.password}
                onChange={onchangeHandler}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    clickHandler(e);
                  }
                }}
              />
            </FormControl>
            <LoadingButton
              loadingPosition="start"
              loading={authLoading}
              variant="contained"
              onClick={clickHandler}
              startIcon={<LoginOutlined />}
              sx={(theme) => ({ color: theme.palette.common.white, mt: 1 })}
            >
              Log In
            </LoadingButton>
          </Box>
          <Grid container justifyContent="center" spacing={2} mb={3}>
            <Grid item>
              <Link to="/" className={classes.navlink}>
                Go To Home
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login/forget-password" className={classes.navlink}>
                Forget Password
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
