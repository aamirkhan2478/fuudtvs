import {
  USER_LOADING,
  ADD_USER,
  SHOW_USERS,
  SHOW_USER_BY_ID,
  SHOW_USER_BY_ID_ERROR,
  UPDATE_USER,
  DELETE_USER,
  ADD_USER_ERROR,
  SHOW_USERS_ERROR,
  UPDATE_USER_ERROR,
  DELETE_USER_ERROR,
  DELETE_USER_MANY,
  DELETE_USER_MANY_ERROR,
} from "../Actions/types";
import axiosInstance from "../../Utils";

export const setLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const showUser = (query) => async (dispatch, getState) => {
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
      `/dashboard/admin/getalluser?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_USERS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_USERS_ERROR,
    });
  }
};

export const showUserByID = (id) => async (dispatch, getState) => {
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
      `/dashboard/admin/getalluser/${id}`,
      config
    );
    dispatch({
      type: SHOW_USER_BY_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_USER_BY_ID_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addUser =
  (values, setNotify, formikHelpers, query) => async (dispatch, getState) => {
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
        "/dashboard/admin/adduser",
        values,
        config
      );
      dispatch({
        type: ADD_USER,
        payload: data,
      });
      setNotify({
        isOpen: true,
        message: data.msg,
        type: "success",
      });
      formikHelpers.resetForm();
      dispatch(showUser(query));
    } catch (err) {
      dispatch({
        type: ADD_USER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const updateUser =
  (values, id, navigate) => async (dispatch, getState) => {
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
        `/dashboard/admin/updateuser/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_USER,
        payload: data,
      });
      navigate("/app/manage-user");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const deleteUser = (id, query) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  try {
    await axiosInstance.delete(`/dashboard/admin/deleteuser/${id}`, config);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
    dispatch(showUser(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteUserMany = (ids, query) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  try {
    await axiosInstance.post(`/dashboard/admin/deletemanyuser`, ids, config);
    dispatch({
      type: DELETE_USER_MANY,
      payload: ids,
    });
    dispatch(showUser(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_USER_MANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
