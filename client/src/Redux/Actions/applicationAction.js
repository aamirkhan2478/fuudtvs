import {
  SHOW_CHEMISTRY_DEPARTMENT,
  SHOW_CHEMISTRY_DEPARTMENT_ERROR,
  SHOW_COMMERCE_DEPARTMENT,
  SHOW_COMMERCE_DEPARTMENT_ERROR,
  SHOW_LAW_DEPARTMENT,
  SHOW_LAW_DEPARTMENT_ERROR,
  SHOW_ISLAMIAT_DEPARTMENT,
  SHOW_ISLAMIAT_DEPARTMENT_ERROR,
  SHOW_PHYSICS_DEPARTMENT,
  SHOW_PHYSICS_DEPARTMENT_ERROR,
  SHOW_APPLIED_PHYSICS_DEPARTMENT,
  SHOW_APPLIED_PHYSICS_DEPARTMENT_ERROR,
  SHOW_CS_DEPARTMENT,
  SHOW_CS_DEPARTMENT_ERROR,
  SHOW_BUSINESS_DEPARTMENT,
  SHOW_BUSINESS_DEPARTMENT_ERROR,
  SHOW_ECONOMICS_DEPARTMENT,
  SHOW_ECONOMICS_DEPARTMENT_ERROR,
  SHOW_ELECTRICAL_DEPARTMENT,
  SHOW_ELECTRICAL_DEPARTMENT_ERROR,
  SHOW_ENGLISH_DEPARTMENT,
  SHOW_ENGLISH_DEPARTMENT_ERROR,
  SHOW_MECHANICAL_DEPARTMENT,
  SHOW_MECHANICAL_DEPARTMENT_ERROR,
  SHOW_MATHEMATICS_DEPARTMENT,
  SHOW_MATHEMATICS_DEPARTMENT_ERROR,
  SHOW_URDU_DEPARTMENT,
  SHOW_URDU_DEPARTMENT_ERROR,
  SHOW_SOFTWARE_DEPARTMENT,
  SHOW_SOFTWARE_DEPARTMENT_ERROR,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT,
  SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_ERROR,
  SHOW_FEE_SECTION,
  SHOW_FEE_SECTION_ERROR,
  SHOW_LIBRARY,
  SHOW_LIBRARY_ERROR,
  SHOW_INCHARGE_CAMPUS,
  SHOW_INCHARGE_CAMPUS_ERROR,
  SHOW_EXAMINATION_DEPARTMENT,
  SHOW_EXAMINATION_DEPARTMENT_ERROR,
  APPLICATION_LOADING,
} from "./types";
import axiosInstance from "../../Utils";

export const setLoading = () => {
  return {
    type: APPLICATION_LOADING,
  };
};

//Chemistry Application
export const chemistryApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/chemdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_CHEMISTRY_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CHEMISTRY_DEPARTMENT_ERROR,
    });
  }
};

//Commerce Application
export const commerceApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/comdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_COMMERCE_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_COMMERCE_DEPARTMENT_ERROR,
    });
  }
};

//Law Application
export const lawApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/lawdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_LAW_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_LAW_DEPARTMENT_ERROR,
    });
  }
};

//Islamiat Application
export const islamiatApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/isldepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_ISLAMIAT_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ISLAMIAT_DEPARTMENT_ERROR,
    });
  }
};

//Physics Application
export const physicsApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/phydepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_PHYSICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_PHYSICS_DEPARTMENT_ERROR,
    });
  }
};

//Applied Physics Application
export const appliedPhysicsApplication =
  (query) => async (dispatch, getState) => {
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
        `/dashboard/user/apdepartmentapplication?q=${query}`,
        config
      );
      dispatch({
        type: SHOW_APPLIED_PHYSICS_DEPARTMENT,
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: SHOW_APPLIED_PHYSICS_DEPARTMENT_ERROR,
      });
    }
  };

//Computer Science Application
export const csApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/csdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_CS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_CS_DEPARTMENT_ERROR,
    });
  }
};

//Business Application
export const businessApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/bsdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_BUSINESS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_BUSINESS_DEPARTMENT_ERROR,
    });
  }
};

//Economics Application
export const economicApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/ecdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_ECONOMICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ECONOMICS_DEPARTMENT_ERROR,
    });
  }
};

//Electrical Application
export const electricalApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/eedepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_ELECTRICAL_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ELECTRICAL_DEPARTMENT_ERROR,
    });
  }
};

//English Application
export const englishApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/engdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_ENGLISH_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_ENGLISH_DEPARTMENT_ERROR,
    });
  }
};

//Mechanical Application
export const mechanicalApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/medepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_MECHANICAL_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_MECHANICAL_DEPARTMENT_ERROR,
    });
  }
};

//Math Application
export const mathApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/mathdepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_MATHEMATICS_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_MATHEMATICS_DEPARTMENT_ERROR,
    });
  }
};

//Urdu Application
export const urduApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/urdudepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_URDU_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_URDU_DEPARTMENT_ERROR,
    });
  }
};

//Software Application
export const softwareApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/sedepartmentapplication?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_SOFTWARE_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_SOFTWARE_DEPARTMENT_ERROR,
    });
  }
};

//International Relation Application
export const internationalApplication =
  (query) => async (dispatch, getState) => {
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
        `/dashboard/user/irdepartmentapplication?q=${query}`,
        config
      );
      dispatch({
        type: SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT,
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: SHOW_INTERNATIONAL_RELATIONS_DEPARTMENT_ERROR,
      });
    }
  };

//Fee Section Application
export const feeSectionApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/feesection?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_FEE_SECTION,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_FEE_SECTION_ERROR,
    });
  }
};

//Library Application
export const libraryApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/library?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_LIBRARY,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_LIBRARY_ERROR,
    });
  }
};

//Examination Application
export const examApplication = (query) => async (dispatch, getState) => {
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
      `/dashboard/user/examination?q=${query}`,
      config
    );
    dispatch({
      type: SHOW_EXAMINATION_DEPARTMENT,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: SHOW_EXAMINATION_DEPARTMENT_ERROR,
    });
  }
};

//Incharge Application
export const inchargeCampusApplication =
  (query) => async (dispatch, getState) => {
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
        `/dashboard/user/inchargecampus?q=${query}`,
        config
      );
      dispatch({
        type: SHOW_INCHARGE_CAMPUS,
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: SHOW_INCHARGE_CAMPUS_ERROR,
      });
    }
  };
