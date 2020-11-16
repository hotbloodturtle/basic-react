import { combineReducers } from "@reduxjs/toolkit";
import boards from "./slices/boards";

const reducer = combineReducers({
  boards,
});

export default reducer;
