import {
  AUTH_LOADING,
  USER_LOAD,
  AUTH_ERROR,
  LOGIN_USER,
  LOGIN_ERROR,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  LOGOUT,
} from "./types";
import axiosInstance from "../../Utils";

export const setLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

export const loadUser = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get("/getalldata", config);
    dispatch({
      type: USER_LOAD,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const loginUser = (values, setNotify, navigate) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.post("/login", values, config);
    dispatch({
      type: LOGIN_USER,
      payload: data,
    });
    navigate("/app/dashboard");
    // window.location.href = '/app/dashboard';
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
    });
    setNotify({
      isOpen: true,
      message: err.response.data.error,
      type: "error",
    });
  }
};

export const forgetPassword =
  (values, formikHelpers, setNotify) => async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.post(
        "/forgetpassword",
        values,
        config
      );
      dispatch({
        type: FORGET_PASSWORD,
        payload: data,
      });
      setNotify({
        isOpen: true,
        message: data.msg,
        type: "success",
      });
      formikHelpers.resetForm();
    } catch (err) {
      dispatch({
        type: FORGET_PASSWORD_ERROR,
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const changePassword =
  (values, setNotify, resetToken) => async (dispatch) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/resetpassword/${resetToken}`,
        values,
        config
      );
      dispatch({
        type: CHANGE_PASSWORD,
        payload: data,
      });
      setNotify({
        isOpen: true,
        message: data.msg,
        type: "success",
      });
    } catch (err) {
      dispatch({
        type: CHANGE_PASSWORD_ERROR,
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const logoutUser = () => (dispatch) => {
  dispatch(setLoading());
  dispatch({
    type: LOGOUT,
  });
};
