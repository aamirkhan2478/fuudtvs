import axiosInstance from "../../Utils";
import {
  CHALAN_LOADING,
  UPLOAD_CHALAN,
  SHOW_CHALAN,
  UPLOAD_PAID_CHALAN,
  SHOW_PAID_CHALAN,
  GET_APPLICATION_ID,
  GET_APPLICATION_ID_ERROR,
  UPLOAD_CHALAN_ERROR,
  SHOW_CHALAN_ERROR,
  UPLOAD_PAID_CHALAN_ERROR,
  SHOW_PAID_CHALAN_ERROR,
} from "../Actions/types";

export const setLoading = () => {
  return {
    type: CHALAN_LOADING,
  };
};

export const uploadChalan =
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
        `/dashboard/user/uploadfeechalan/${id}`,
        values,
        config
      );
      dispatch({
        type: UPLOAD_CHALAN,
        payload: data,
      });
      navigate("/app/applications");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: UPLOAD_CHALAN_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const uploadPaidChalan =
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
        `/dashboard/student/uploadpaidchalan/${id}`,
        values,
        config
      );
      dispatch({
        type: UPLOAD_PAID_CHALAN,
        payload: data,
      });
      navigate("/app/download-chalan");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: UPLOAD_PAID_CHALAN_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const showChalan = () => async (dispatch, getState) => {
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
      `/dashboard/student/showchalan`,
      config
    );
    dispatch({
      type: SHOW_CHALAN,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CHALAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showPaidChalan = (id) => async (dispatch, getState) => {
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
      `/dashboard/user/showpaidchalan/${id}`,
      config
    );
    dispatch({
      type: SHOW_PAID_CHALAN,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_PAID_CHALAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getApplicationID = () => async (dispatch, getState) => {
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
      `/dashboard/student/application`,
      config
    );
    dispatch({
      type: GET_APPLICATION_ID,
      payload: data._id,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: GET_APPLICATION_ID_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
