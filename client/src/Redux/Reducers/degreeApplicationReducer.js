import {
  DEGREE_APPLICATIONS_LOADING,
  SHOW_DEGREE_APPLICATIONS,
  DELETE_DEGREE_APPLICATIONS,
  DELETE_DEGREE_APPLICATIONS_MANY,
  SHOW_DEGREE_APPLICATIONS_ERROR,
  DELETE_DEGREE_APPLICATIONS_ERROR,
  DELETE_DEGREE_APPLICATIONS_MANY_ERROR,
} from "../Actions/types";

const initialState = {
  degree_application_loading: false,
  show_degree_applications: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DEGREE_APPLICATIONS_LOADING:
      return {
        ...state,
        degree_application_loading: true,
      };
    case SHOW_DEGREE_APPLICATIONS:
      return {
        ...state,
        degree_application_loading: false,
        show_degree_applications: payload,
      };

    case DELETE_DEGREE_APPLICATIONS:
      return {
        ...state,
        degree_application_loading: false,
        show_degree_applications: state.show_degree_applications.filter(
          (degree) => degree._id !== payload
        ),
      };
    case DELETE_DEGREE_APPLICATIONS_MANY:
      return {
        ...state,
        degree_application_loading: false,
        show_degree_applications: state.show_degree_applications.filter(
          (degree) => degree._id !== payload
        ),
      };
    case SHOW_DEGREE_APPLICATIONS_ERROR:
    case DELETE_DEGREE_APPLICATIONS_ERROR:
    case DELETE_DEGREE_APPLICATIONS_MANY_ERROR:
      return {
        ...state,
        degree_application_loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
