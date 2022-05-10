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

const initialState = {
  user_loading: false,
  user: null,
  show_users: [],
  show_user_by_id: {},
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        user_loading: true,
      };
    case SHOW_USERS:
      return {
        ...state,
        user_loading: false,
        show_users: payload,
      };
    case SHOW_USER_BY_ID:
      return {
        ...state,
        user_loading: false,
        show_user_by_id: payload,
      };
    case UPDATE_USER:
    case ADD_USER:
      return {
        ...state,
        user_loading: false,
        user: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user_loading: false,
        show_users: state.show_users.filter((user) => user._id !== payload),
      };
    case DELETE_USER_MANY:
      return {
        ...state,
        student_loading: false,
        show_users: state.show_users.filter((user) => user._id !== payload),
      };
    case ADD_USER_ERROR:
    case UPDATE_USER_ERROR:
    case DELETE_USER_ERROR:
    case DELETE_USER_MANY_ERROR:
    case SHOW_USERS_ERROR:
    case SHOW_USER_BY_ID_ERROR:
      return {
        ...state,
        user_loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
