import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducers";
import ModelReducer from "./model/ModelReducer";

export default combineReducers({
  auth: AuthReducer,
  model: ModelReducer,
});
