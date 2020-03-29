import { combineReducer } from "../../lib/redux";
import counterReducer from "./counter";
import todoReducer from "./todo";

const newReducer = combineReducer({
  c: counterReducer,
  t: todoReducer
});

export default newReducer;
