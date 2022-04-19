import { combineReducers } from "redux";
import { tableReducer } from "./reducers";

const reducers = combineReducers({
  table: tableReducer,
});

export default reducers;
