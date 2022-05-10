import axiosInstance from "../../Utils";
import {
  STATUS_LOADING,
  SHOW_STATUS,
  UPDATE_STATUS,
  SHOW_STATUS_ERROR,
  UPDATE_STATUS_ERROR,
} from "./types";

const setLoading = () => {
  return {
    type: STATUS_LOADING,
  };
};

export const showStatus = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(
      "/dashboard/student/status",
      config
    );
    dispatch({
      type: SHOW_STATUS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_STATUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateStatus =
  (values, navigate, id, setNotify) => async (dispatch, getState) => {
    const { token, user } = getState().auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.put(
        `/dashboard/admin/updatestatus/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_STATUS,
        payload: data,
      });
      user.role === "Admin"
        ? navigate("/app/degree-applications")
        : navigate("/app/applications");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: UPDATE_STATUS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
      });
    }
  };
