import { createStore, combineReducer } from "../lib/redux";
import counterReducer from "./reducer/counter";
import todoReducer from "./reducer/todo";

const newReducer = combineReducer({
  c: counterReducer,
  t: todoReducer
});

const store = createStore(newReducer);

window.store = store;

export default store;
