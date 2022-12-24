import axiosInstance from "../../Utils";
import {
  CHANGE_PASSWORD_LOADING,
  USER_CHANGE_PASSWORD,
  USER_CHANGE_PASSWORD_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: CHANGE_PASSWORD_LOADING,
  };
};

export const userChangePassword =
  (values, id, setNotify, navigate) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/dashboard/changepassword/${id}`,
        values,
        config
      );
      dispatch({
        type: USER_CHANGE_PASSWORD,
        payload: data,
      });
      navigate("/app/dashboard");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: USER_CHANGE_PASSWORD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };
