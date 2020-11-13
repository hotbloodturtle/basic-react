import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import boards from "./modules/boards";

const middlewares = [thunk];

const reducer = combineReducers({
  boards,
});

const store = (initialState) =>
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
