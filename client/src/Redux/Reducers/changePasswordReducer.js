import {
  CHANGE_PASSWORD_LOADING,
  USER_CHANGE_PASSWORD,
  USER_CHANGE_PASSWORD_ERROR,
} from "../Actions/types";

const initialState = {
  change_password_loading: false,
  user_change_password: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        change_password_loading: true,
      };
    case USER_CHANGE_PASSWORD:
      return {
        ...state,
        user_change_password: payload,
      };
    case USER_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
