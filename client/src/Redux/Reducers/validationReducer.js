import {
  DEGREE_LOADING,
  SHOW_SUCCESS_APPLICATION,
  SHOW_SUCCESS_APPLICATION_ERROR,
} from "../Actions/types";

const initialState = {
  degree_loading: false,
  show_success_application: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DEGREE_LOADING:
      return {
        ...state,
        degree_loading: true,
      };
    case SHOW_SUCCESS_APPLICATION:
      return {
        ...state,
        degree_loading: false,
        show_success_application: payload,
      };
    case SHOW_SUCCESS_APPLICATION_ERROR:
      return {
        ...state,
        degree_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
