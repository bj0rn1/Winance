import { combineReducers } from "redux";
import { tableReducer } from "./reducers";
import { alertReducer } from "./reducers";

const reducers = combineReducers({
  table: tableReducer,
  isShow: alertReducer,
});

export default reducers;
