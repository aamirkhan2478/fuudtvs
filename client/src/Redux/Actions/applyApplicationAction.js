import axiosInstance from "../../Utils";
import {
  APPLY_APPLICATION_LOADING,
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: APPLY_APPLICATION_LOADING,
  };
};

export const submitApplication =
  (values, formikHelpers, setNotify) => async (dispatch, getState) => {
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
        "/dashboard/student/applyapplication",
        values,
        config
      );
      dispatch({
        type: SUBMIT_APPLICATION,
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
        type: SUBMIT_APPLICATION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };
