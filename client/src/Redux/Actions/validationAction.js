import axiosInstance from "../../Utils";
import {
  DEGREE_LOADING,
  SHOW_SUCCESS_APPLICATION,
  SHOW_SUCCESS_APPLICATION_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: DEGREE_LOADING,
  };
};

export const showSuccessApplication =
  (query, setVisible) => async (dispatch, getState) => {
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
        `/getsuccessdegreeapplication/${query}`,
        config
      );
      dispatch({
        type: SHOW_SUCCESS_APPLICATION,
        payload: data,
      });
      setVisible(true);
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: SHOW_SUCCESS_APPLICATION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
