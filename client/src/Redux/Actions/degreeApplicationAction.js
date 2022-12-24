import axiosInstance from "../../Utils";
import {
  DEGREE_APPLICATIONS_LOADING,
  SHOW_DEGREE_APPLICATIONS,
  DELETE_DEGREE_APPLICATIONS,
  DELETE_DEGREE_APPLICATIONS_MANY,
  SHOW_DEGREE_APPLICATIONS_ERROR,
  DELETE_DEGREE_APPLICATIONS_ERROR,
  DELETE_DEGREE_APPLICATIONS_MANY_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: DEGREE_APPLICATIONS_LOADING,
  };
};

export const showDegreeApplications = (query) => async (dispatch, getState) => {
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
      `/dashboard/admin/getallapplications?q${query}`,
      config
    );
    dispatch({
      type: SHOW_DEGREE_APPLICATIONS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DEGREE_APPLICATIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteApplication = (id, query) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  dispatch(setLoading());
  try {
    await axiosInstance.delete(
      `/dashboard/admin/deleteapplication/${id}`,
      config
    );
    dispatch({
      type: DELETE_DEGREE_APPLICATIONS,
      payload: id,
    });
    dispatch(showDegreeApplications(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_DEGREE_APPLICATIONS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteApplicationMany =
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
      await axiosInstance.post(`/admin/deletemanyapplications`, ids, config);
      dispatch({
        type: DELETE_DEGREE_APPLICATIONS_MANY,
        payload: ids,
      });
      dispatch(showDegreeApplications(query));
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: DELETE_DEGREE_APPLICATIONS_MANY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
