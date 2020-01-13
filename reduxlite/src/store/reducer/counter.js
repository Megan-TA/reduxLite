import * as Types from "../types";

let initState = {
  number: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case Types.DECREMENT:
      return { ...state, number: state.number - action.count };
    case Types.INCREMENT:
      return { ...state, number: state.number + action.count };
    default:
      break;
  }
  return state;
}

export default reducer;
