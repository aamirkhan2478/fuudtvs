import axiosInstance from "../../Utils";
import {
  FEEDBACK_LOADING,
  SEND_FEEDBACK,
  SHOW_FEEDBACKS,
  DELETE_FEEDBACK_MANY,
  DELETE_FEEDBACK_MANY_ERROR,
  SEND_FEEDBACK_ERROR,
  SHOW_FEEDBACKS_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: FEEDBACK_LOADING,
  };
};

export const sendFeedback =
  (values, setNotify, formikHelpers) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    dispatch(setLoading());
    try {
      const { data } = await axiosInstance.post(
        "/dashboard/student/sendfeedback",
        values,
        config
      );
      dispatch({
        type: SEND_FEEDBACK,
        payload: data,
      });
      setNotify({
        isOpen: true,
        message: data.msg,
        type: "success",
      });
      formikHelpers.resetForm();
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: SEND_FEEDBACK_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const showFeedback = (query) => async (dispatch, getState) => {
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
      `/dashboard/admin/viewfeedback?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_FEEDBACKS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_FEEDBACKS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteFeedbackMany =
  (ids, query) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    dispatch(setLoading());
    try {
      await axiosInstance.post(
        `/dashboard/admin/deletemanyfeedbacks`,
        ids,
        config
      );
      dispatch({
        type: DELETE_FEEDBACK_MANY,
        payload: ids,
      });
      dispatch(showFeedback(query));
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: DELETE_FEEDBACK_MANY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
