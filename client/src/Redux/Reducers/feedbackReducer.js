import {
  FEEDBACK_LOADING,
  SEND_FEEDBACK,
  SHOW_FEEDBACKS,
  DELETE_FEEDBACK_MANY,
  DELETE_FEEDBACK_MANY_ERROR,
  SEND_FEEDBACK_ERROR,
  SHOW_FEEDBACKS_ERROR,
} from "../Actions/types";

const initialState = {
  feedback_loading: false,
  feedback: null,
  show_feedbacks: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FEEDBACK_LOADING:
      return {
        ...state,
        feedback_loading: true,
      };
    case SEND_FEEDBACK:
      return {
        ...state,
        feedback_loading: false,
        feedback: payload,
      };
    case SHOW_FEEDBACKS:
      return {
        ...state,
        feedback_loading: false,
        show_feedbacks: payload,
      };
    case DELETE_FEEDBACK_MANY:
      return {
        ...state,
        feedback_loading: false,
        show_feedbacks: state.show_feedbacks.filter(
          (feedback) => feedback._id !== payload
        ),
      };
    case SEND_FEEDBACK_ERROR:
    case SHOW_FEEDBACKS_ERROR:
    case DELETE_FEEDBACK_MANY_ERROR:
      return {
        ...state,
        feedback_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
