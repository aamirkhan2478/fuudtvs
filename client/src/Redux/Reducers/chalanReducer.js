import {
  CHALAN_LOADING,
  UPLOAD_CHALAN,
  SHOW_CHALAN,
  UPLOAD_PAID_CHALAN,
  SHOW_PAID_CHALAN,
  GET_APPLICATION_ID,
  GET_APPLICATION_ID_ERROR,
  UPLOAD_CHALAN_ERROR,
  SHOW_CHALAN_ERROR,
  UPLOAD_PAID_CHALAN_ERROR,
  SHOW_PAID_CHALAN_ERROR,
} from "../Actions/types";

const initialState = {
  chalan_loading: false,
  upload_chalan: null,
  upload_paid_chalan: null,
  show_chalan: {},
  show_paid_chalan: {},
  get_application_id: {},
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHALAN_LOADING:
      return {
        ...state,
        chalan_loading: true,
      };
    case UPLOAD_CHALAN:
      return {
        ...state,
        chalan_loading: false,
        upload_chalan: payload,
      };
    case UPLOAD_PAID_CHALAN:
      return {
        ...state,
        chalan_loading: false,
        upload_paid_chalan: payload,
      };
    case SHOW_CHALAN:
      return {
        ...state,
        chalan_loading: false,
        show_chalan: payload,
      };
    case SHOW_PAID_CHALAN:
      return {
        ...state,
        chalan_loading: false,
        show_paid_chalan: payload,
      };
    case GET_APPLICATION_ID:
      return {
        ...state,
        chalan_loading: false,
        get_application_id: payload,
      };
    case UPLOAD_CHALAN_ERROR:
    case UPLOAD_PAID_CHALAN_ERROR:
    case SHOW_CHALAN_ERROR:
    case SHOW_PAID_CHALAN_ERROR:
    case GET_APPLICATION_ID_ERROR:
      return {
        ...state,
        chalan_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
