import * as Types from "../types";

const actions = {
  add(count) {
    return {
      type: Types.INCREMENT,
      count
    };
  },

  minus(count) {
    return {
      type: Types.DECREMENT,
      count
    };
  }
};

export default actions;
