import * as Types from "../types";

let initState = {
  number: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return { ...state, number: state.number + action.count };
    case Types.DECREMENT:
      // 必须返回新的对象 不能修改原来的state
      return { ...state, number: state.number - action.count };

    default:
      return state;
  }
}

export default reducer;
