import {
  SHOW_CHEMISTRY_DEPARTMENT_COUNT,
  SHOW_CHEMISTRY_DEPARTMENT_COUNT_ERROR,
  SHOW_COMMERCE_DEPARTMENT_COUNT,
  SHOW_COMMERCE_DEPARTMENT_COUNT_ERROR,
  SHOW_LAW_DEPARTMENT_COUNT,
  SHOW_LAW_DEPARTMENT_COUNT_ERROR,
  SHOW_ISLAMIAT_DEPARTMENT_COUNT,
  SHOW_ISLAMIAT_DEPARTMENT_COUNT_ERROR,
  SHOW_PHYSICS_DEPARTMENT_COUNT,
  SHOW_PHYSICS_DEPARTMENT_COUNT_ERROR,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT_ERROR,
  SHOW_CS_DEPARTMENT_COUNT,
  SHOW_CS_DEPARTMENT_COUNT_ERROR,
  SHOW_BUSINESS_DEPARTMENT_COUNT,
  SHOW_BUSINESS_DEPARTMENT_COUNT_ERROR,
  SHOW_ECONOMICS_DEPARTMENT_COUNT,
  SHOW_ECONOMICS_DEPARTMENT_COUNT_ERROR,
  SHOW_ELECTRICAL_DEPARTMENT_COUNT,
  SHOW_ELECTRICAL_DEPARTMENT_COUNT_ERROR,
  SHOW_ENGLISH_DEPARTMENT_COUNT,
  SHOW_ENGLISH_DEPARTMENT_COUNT_ERROR,
  SHOW_MECHANICAL_DEPARTMENT_COUNT,
  SHOW_MECHANICAL_DEPARTMENT_COUNT_ERROR,
  SHOW_MATHEMATICS_DEPARTMENT_COUNT,
  SHOW_MATHEMATICS_DEPARTMENT_COUNT_ERROR,
  SHOW_URDU_DEPARTMENT_COUNT,
  SHOW_URDU_DEPARTMENT_COUNT_ERROR,
  SHOW_SOFTWARE_DEPARTMENT_COUNT,
  SHOW_SOFTWARE_DEPARTMENT_COUNT_ERROR,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT_ERROR,
  SHOW_FEE_SECTION_COUNT,
  SHOW_FEE_SECTION_COUNT_ERROR,
  SHOW_LIBRARY_COUNT,
  SHOW_LIBRARY_COUNT_ERROR,
  SHOW_INCHARGE_CAMPUS_COUNT,
  SHOW_INCHARGE_CAMPUS_COUNT_ERROR,
  SHOW_EXAMINATION_DEPARTMENT_COUNT,
  SHOW_EXAMINATION_DEPARTMENT_COUNT_ERROR,
  COUNT_LOADING,
} from "./types";
import axiosInstance from "../../Utils";

export const setLoading = () => {
  return {
    type: COUNT_LOADING,
  };
};

//Chemistry Application Count
export const chemistryCount = () => async (dispatch, getState) => {
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
      `/dashboard/chemdepartmentapplicationcount`,
      config
    );
    dispatch({
      type: SHOW_CHEMISTRY_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CHEMISTRY_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Commerce Application Count
export const commerceCount = () => async (dispatch, getState) => {
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
      "/dashboard/comdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_COMMERCE_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_COMMERCE_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Law Application Count
export const lawCount = () => async (dispatch, getState) => {
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
      "/dashboard/lawdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_LAW_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_LAW_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Islamiat Application Count
export const islamiatCount = () => async (dispatch, getState) => {
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
      "/dashboard/isldepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_ISLAMIAT_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ISLAMIAT_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Physics Application Count
export const physicsCount = () => async (dispatch, getState) => {
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
      "/dashboard/phydepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_PHYSICS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_PHYSICS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Applied Physics Application Count
export const appliedPhysicsCount = () => async (dispatch, getState) => {
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
      "/dashboard/apdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_APPLIED_PHYSICS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Computer Science Application Count
export const csCount = () => async (dispatch, getState) => {
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
      "/dashboard/csdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_CS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Business Application Count
export const businessCount = () => async (dispatch, getState) => {
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
      "dashboard/bsdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_BUSINESS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_BUSINESS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Economics Application Count
export const economicCount = () => async (dispatch, getState) => {
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
      "/dashboard/ecdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_ECONOMICS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ECONOMICS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Electrical Application Count
export const electricalCount = () => async (dispatch, getState) => {
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
      "/dashboard/eedepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_ELECTRICAL_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ELECTRICAL_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//English Application Count
export const englishCount = () => async (dispatch, getState) => {
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
      "/dashboard/engdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_ENGLISH_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ENGLISH_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Mechanical Application Count
export const mechanicalCount = () => async (dispatch, getState) => {
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
      "/dashboard/medepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_MECHANICAL_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_MECHANICAL_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Math Application Count
export const mathCount = () => async (dispatch, getState) => {
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
      "/dashboard/mathdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_MATHEMATICS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_MATHEMATICS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Urdu Application Count
export const urduCount = () => async (dispatch, getState) => {
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
      "/dashboard/urdudepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_URDU_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_URDU_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Software Application Count
export const softwareCount = () => async (dispatch, getState) => {
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
      "/dashboard/sedepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_SOFTWARE_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_SOFTWARE_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//International Relation Application Count
export const internationalCount = () => async (dispatch, getState) => {
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
      "/dashboard/irdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Fee Section Application Count
export const feeSectionCount = () => async (dispatch, getState) => {
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
      "/dashboard/feesectionapplicationcount",
      config
    );
    dispatch({
      type: SHOW_FEE_SECTION_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_FEE_SECTION_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Library Application Count
export const libraryCount = () => async (dispatch, getState) => {
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
      "/dashboard/libraryapplicationcount",
      config
    );
    dispatch({
      type: SHOW_LIBRARY_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_LIBRARY_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Examination Application Count
export const examCount = () => async (dispatch, getState) => {
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
      "/dashboard/examinationdepartmentapplicationcount",
      config
    );
    dispatch({
      type: SHOW_EXAMINATION_DEPARTMENT_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_EXAMINATION_DEPARTMENT_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Incharge Application Count
export const inchargeCampusCount = () => async (dispatch, getState) => {
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
      "/dashboard/inchargecampusapplicationcount",
      config
    );
    dispatch({
      type: SHOW_INCHARGE_CAMPUS_COUNT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_INCHARGE_CAMPUS_COUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
