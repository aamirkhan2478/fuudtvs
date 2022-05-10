import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./Reducers";

const initialValue = {};
const middleware = [thunk];
const store = createStore(
  rootReducers,
  initialValue,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
