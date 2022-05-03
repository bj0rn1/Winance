import { combineReducers } from "redux";
import { tableReducer } from "./reducers";
import { alertReducer } from "./reducers";
import { homeReducer } from "./reducers";

const reducers = combineReducers({
  table: tableReducer,
  isShow: alertReducer,
  userData: homeReducer,
});

export default reducers;
