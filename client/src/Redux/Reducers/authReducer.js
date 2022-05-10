import {
  AUTH_LOADING,
  LOGIN_USER,
  LOGIN_ERROR,
  USER_LOAD,
  AUTH_ERROR,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  LOGOUT,
} from '../Actions/types';

const initialState = {
  token: localStorage.getItem('authToken'),
  isAuthenticated: null,
  authLoading: false,
  user: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case USER_LOAD:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        authLoading: false,
      };
    case LOGIN_USER:
      localStorage.setItem('authToken', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        authLoading: false,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        ...payload,
        authLoading: false,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        ...payload,
        authLoading: false,
      };
    case LOGIN_ERROR:
    case AUTH_ERROR:
    case CHANGE_PASSWORD_ERROR:
    case FORGET_PASSWORD_ERROR:
    case LOGOUT:
      localStorage.removeItem('authToken');
      return {
        ...state,
        authLoading: false,
        isAuthenticated: null,
        user: {},
        token: null,
      };
    default:
      return state;
  }
}
