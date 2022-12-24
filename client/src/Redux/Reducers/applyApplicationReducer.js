import {
  APPLY_APPLICATION_LOADING,
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_ERROR,
} from "../Actions/types";

const initialState = {
  apply_application_loading: false,
  apply_application: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case APPLY_APPLICATION_LOADING:
      return {
        ...state,
        apply_application_loading: true,
      };
    case SUBMIT_APPLICATION:
      return {
        ...state,
        apply_application_loading: false,
        apply_application: payload,
      };
    case SUBMIT_APPLICATION_ERROR:
      return {
        ...state,
        apply_application_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
