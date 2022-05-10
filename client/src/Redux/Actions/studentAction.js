import {
  ADD_STUDENT,
  ADD_STUDENT_ERROR,
  DELETE_STUDENT,
  DELETE_STUDENT_ERROR,
  DELETE_STUDENT_MANY,
  DELETE_STUDENT_MANY_ERROR,
  SHOW_STUDENTS,
  SHOW_STUDENTS_BY_ID,
  SHOW_STUDENTS_BY_ID_ERROR,
  SHOW_STUDENTS_ERROR,
  STUDENT_LOADING,
  UPDATE_STUDENT,
  UPDATE_STUDENT_ERROR,
} from "./types";
import axiosInstance from "../../Utils";

export const setLoading = () => {
  return {
    type: STUDENT_LOADING,
  };
};

export const showStudent = (query) => async (dispatch, getState) => {
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
      `/dashboard/admin/getallstudent?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_STUDENTS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_STUDENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const showStudentByID = (id) => async (dispatch, getState) => {
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
      `/dashboard/admin/getallstudent/${id}`,
      config
    );
    dispatch({
      type: SHOW_STUDENTS_BY_ID,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_STUDENTS_BY_ID_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addStudent =
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
        "/dashboard/admin/addstudent",
        values,
        config
      );
      dispatch({
        type: ADD_STUDENT,
        payload: data,
      });
      setNotify({
        isOpen: true,
        message: data.msg,
        type: "success",
      });
      formikHelpers.resetForm();
      dispatch(showStudent(query));
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: ADD_STUDENT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

export const updateStudent =
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
        type: UPDATE_STUDENT,
        payload: data,
      });
      navigate("/app/manage-student");
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: UPDATE_STUDENT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const deleteStudent = (id, query) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  dispatch(setLoading());
  try {
    await axiosInstance.delete(`/dashboard/admin/deleteuser/${id}`, config);
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
    dispatch(showStudent(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_STUDENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteStudentMany = (ids, query) => async (dispatch, getState) => {
  const { token } = getState().auth;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  dispatch(setLoading());
  try {
    await axiosInstance.post(`/dashboard/admin/deletemanyuser`, ids, config);
    dispatch({
      type: DELETE_STUDENT_MANY,
      payload: ids,
    });
    dispatch(showStudent(query));
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: DELETE_STUDENT_MANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
