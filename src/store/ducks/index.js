import { combineReducers } from "redux";

import { reducer as podcasts } from "./podcast";
const reducers = combineReducers({
  podcasts
});

export default reducers;
