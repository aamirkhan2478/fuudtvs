import {
  DEPARTMENT_LOADING,
  ADD_DEPARTMENT,
  SHOW_DEPARTMENTS,
  SHOW_DEPARTMENT_BY_ID,
  SHOW_DEPARTMENT_BY_ID_ERROR,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  ADD_DEPARTMENT_ERROR,
  SHOW_DEPARTMENTS_ERROR,
  UPDATE_DEPARTMENT_ERROR,
  DELETE_DEPARTMENT_ERROR,
  DELETE_STUDENT_MANY_ERROR,
  DELETE_STUDENT_MANY,
} from "../Actions/types";

const initialState = {
  department_loading: false,
  department: null,
  show_departments: [],
  show_department_by_id: {},
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DEPARTMENT_LOADING:
      return {
        ...state,
        department_loading: true,
      };
    case SHOW_DEPARTMENTS:
      return {
        ...state,
        department_loading: false,
        show_departments: payload,
      };
    case SHOW_DEPARTMENT_BY_ID:
      return {
        ...state,
        department_loading: false,
        show_department_by_id: payload,
      };
    case ADD_DEPARTMENT:
    case UPDATE_DEPARTMENT:
      return {
        ...state,
        department_loading: false,
        department: payload,
      };
    case DELETE_DEPARTMENT:
      return {
        ...state,
        department_loading: false,
        show_departments: state.show_departments.filter(
          (department) => department._id !== payload
        ),
      };
    case DELETE_STUDENT_MANY:
      return {
        ...state,
        student_loading: false,
        show_departments: state.show_departments.filter(
          (department) => department._id !== payload
        ),
      };
    case SHOW_DEPARTMENTS_ERROR:
    case SHOW_DEPARTMENT_BY_ID_ERROR:
    case ADD_DEPARTMENT_ERROR:
    case UPDATE_DEPARTMENT_ERROR:
    case DELETE_DEPARTMENT_ERROR:
    case DELETE_STUDENT_MANY_ERROR:
      return {
        ...state,
        department_loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
