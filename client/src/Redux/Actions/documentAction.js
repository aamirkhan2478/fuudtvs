import axiosInstance from "../../Utils";
import { DOCUMENT_LOADING, SHOW_DOCUMENT, SHOW_DOCUMENT_ERROR } from "./types";

export const setLoading = () => {
  return {
    type: DOCUMENT_LOADING,
  };
};

export const showDocuments = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  dispatch(setLoading());
  try {
    const { data } = await axiosInstance.get(`/dashboard/showdocuments/${id}`, config);
    dispatch({
      type: SHOW_DOCUMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DOCUMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
