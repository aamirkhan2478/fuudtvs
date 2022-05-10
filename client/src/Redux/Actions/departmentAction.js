import axiosInstance from "../../Utils";
import {
  DEPARTMENT_LOADING,
  ADD_DEPARTMENT,
  SHOW_DEPARTMENTS,
  SHOW_DEPARTMENT_BY_ID,
  SHOW_DEPARTMENT_BY_ID_ERROR,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  ADD_DEPARTMENT_ERROR,
  SHOW_DEPARTMENTS_ERROR,
  UPDATE_DEPARTMENT_ERROR,
  DELETE_DEPARTMENT_ERROR,
  DELETE_DEPARTMENT_MANY,
  DELETE_DEPARTMENT_MANY_ERROR,
} from "./types";

export const setLoading = () => {
  return {
    type: DEPARTMENT_LOADING,
  };
};

export const showDepartment = (query) => async (dispatch, getState) => {
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
      `/dashboard/admin/getalldepartment?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_DEPARTMENTS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DEPARTMENTS_ERROR,
      payload: { msg: err.response.ststusText, status: err.response.ststus },
    });
  }
};

export const showDepartmentByID = (id) => async (dispatch, getState) => {
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
      `/dashboard/admin/getalldepartment/${id}`,
      config
    );
    dispatch({
      type: SHOW_DEPARTMENT_BY_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_DEPARTMENT_BY_ID_ERROR,
      payload: { msg: err.response.ststusText, status: err.response.ststus },
    });
  }
};

export const addDepartment =
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
        "/dashboard/admin/adddepartment",
        values,
        config
      );
      dispatch({
        type: ADD_DEPARTMENT,
        payload: data,
      });
      setNotify({
        isOpen: true,
        message: data.msg,
        type: "success",
      });
      formikHelpers.resetForm();
      dispatch(showDepartment(query));
    } catch (err) {
      dispatch({
        type: ADD_DEPARTMENT_ERROR,
        payload: { msg: err.response.ststusText, status: err.response.ststus },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const updateDepartment =
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
        `/dashboard/admin/updatedepartment/${id}`,
        values,
        config
      );
      dispatch({
        type: UPDATE_DEPARTMENT,
        payload: data,
      });
      navigate("/app/manage-department");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: UPDATE_DEPARTMENT_ERROR,
        payload: { msg: err.response.ststusText, status: err.response.ststus },
      });
    }
  };

export const deleteDepartment = (id, query) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  try {
    await axiosInstance.delete(
      `/dashboard/admin/deletedepartment/${id}`,
      config
    );
    dispatch({
      type: DELETE_DEPARTMENT,
    });
    dispatch(showDepartment(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_DEPARTMENT_ERROR,
      payload: { msg: err.response.ststusText, status: err.response.ststus },
    });
  }
};

export const deleteDepartmentMany =
  (ids, query) => async (dispatch, getState) => {
    const { token } = getState().auth;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    try {
      await axiosInstance.post(
        `/dashboard/admin/deletemanydepartments`,
        ids,
        config
      );
      dispatch({
        type: DELETE_DEPARTMENT_MANY,
      });
      dispatch(showDepartment(query));
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: DELETE_DEPARTMENT_MANY_ERROR,
        payload: { msg: err.response.ststusText, status: err.response.ststus },
      });
    }
  };
