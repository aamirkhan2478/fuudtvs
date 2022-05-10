import {
  STUDENT_LOADING,
  ADD_STUDENT,
  SHOW_STUDENTS,
  SHOW_STUDENTS_BY_ID,
  SHOW_STUDENTS_BY_ID_ERROR,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  ADD_STUDENT_ERROR,
  SHOW_STUDENTS_ERROR,
  DELETE_STUDENT_ERROR,
  UPDATE_STUDENT_ERROR,
  DELETE_STUDENT_MANY,
  DELETE_STUDENT_MANY_ERROR,
} from "../Actions/types";

const initialState = {
  student_loading: false,
  student: null,
  show_students: [],
  show_student_by_id: {},
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STUDENT_LOADING:
      return {
        ...state,
        student_loading: true,
      };
    case UPDATE_STUDENT:
    case ADD_STUDENT:
      return {
        ...state,
        student_loading: false,
        student: payload,
      };
    case SHOW_STUDENTS:
      return {
        ...state,
        student_loading: false,
        show_students: payload,
      };
    case SHOW_STUDENTS_BY_ID:
      return {
        ...state,
        student_loading: false,
        show_student_by_id: payload,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        student_loading: false,
        show_students: state.show_students.filter(
          (student) => student._id !== payload
        ),
      };
    case DELETE_STUDENT_MANY:
      return {
        ...state,
        student_loading: false,
        show_students: state.show_students.filter(
          (student) => student._id !== payload
        ),
      };
    case ADD_STUDENT_ERROR:
    case SHOW_STUDENTS_ERROR:
    case UPDATE_STUDENT_ERROR:
    case DELETE_STUDENT_ERROR:
    case DELETE_STUDENT_MANY_ERROR:
    case SHOW_STUDENTS_BY_ID_ERROR:
      return {
        ...state,
        student_loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
