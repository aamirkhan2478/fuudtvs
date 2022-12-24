import axiosInstance from "../../Utils";
import {
  CONTACT_LOADING,
  SEND_CONTACT,
  SHOW_CONTACTS,
  DELETE_CONTACT_MANY,
  SEND_CONTACT_ERROR,
  SHOW_CONTACTS_ERROR,
  DELETE_CONTACT_MANY_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: CONTACT_LOADING,
  };
};

export const sendContact =
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
      const { data } = await axiosInstance.post("/contact", values, config);
      dispatch({
        type: SEND_CONTACT,
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
        type: SEND_CONTACT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const showContact = (query) => async (dispatch, getState) => {
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
      `/dashboard/admin/viewcontactus?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_CONTACTS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CONTACTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteContactMany = (ids, query) => async (dispatch, getState) => {
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
      `/dashboard/admin/deletemanycontacts`,
      ids,
      config
    );
    dispatch({
      type: DELETE_CONTACT_MANY,
      payload: ids,
    });
    dispatch(showContact(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_CONTACT_MANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
