import {
  STATUS_LOADING,
  SHOW_STATUS,
  UPDATE_STATUS,
  SHOW_STATUS_ERROR,
  UPDATE_STATUS_ERROR,
} from "../Actions/types";

const initialState = {
  status_loading: false,
  show_status: {},
  update_status: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATUS_LOADING:
      return {
        ...state,
        status_loading: true,
      };
    case SHOW_STATUS:
      return {
        ...state,
        status_loading: false,
        show_status: payload,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        status_loading: false,
        update_status: payload,
      };
    case UPDATE_STATUS_ERROR:
    case SHOW_STATUS_ERROR:
      return {
        ...state,
        status_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
