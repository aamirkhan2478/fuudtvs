import {
  DOCUMENT_LOADING,
  SHOW_DOCUMENT,
  SHOW_DOCUMENT_ERROR,
} from "../Actions/types";

const initialState = {
  document_loading: false,
  show_document: {},
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DOCUMENT_LOADING:
      return {
        ...state,
        document_loading: true,
      };
    case SHOW_DOCUMENT:
      return {
        ...state,
        document_loading: false,
        show_document: payload,
      };
    case SHOW_DOCUMENT_ERROR:
      return {
        ...state,
        document_loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
