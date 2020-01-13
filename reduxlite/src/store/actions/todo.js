import * as types from "../types";

export default {
  add(val) {
    return {
      type: types.ADD_TODO,
      value: val
    };
  },
  del(val) {
    return {
      type: types.DEL_TODO,
      value: val
    };
  }
};
