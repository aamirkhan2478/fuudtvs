import { combineReducers } from "redux";
import authReducer from "./authReducer";
import departmentReducer from "./departmentReducer";
import studentReducer from "./studentReducer";
import userReducer from "./userReducer";
import degreeApplicationReducer from "./degreeApplicationReducer";
import documentReducer from "./documentReducer";
import feedbackReducer from "./feedbackReducer";
import contactReducer from "./contactReducer";
import applyApplicationReducer from "./applyApplicationReducer";
import statusReducer from "./statusReducer";
import chalanReducer from "./chalanReducer";
import changePasswordReducer from "./changePasswordReducer";
import countReducer from "./countReducer";
import applicationReducer from "./applicationReducer";
import validationReducer from "./validationReducer";

export default combineReducers({
  auth: authReducer,
  student: studentReducer,
  user: userReducer,
  department: departmentReducer,
  degreeapplications: degreeApplicationReducer,
  document: documentReducer,
  feedback: feedbackReducer,
  contact: contactReducer,
  applyapplication: applyApplicationReducer,
  status: statusReducer,
  chalan: chalanReducer,
  changepassword: changePasswordReducer,
  count: countReducer,
  applications: applicationReducer,
  validation: validationReducer,
});
