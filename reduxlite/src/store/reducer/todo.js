import * as types from "../types";

let initState = {
  lists: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      state.lists.push(action.value);
      break;
    case types.DEL_TODO:
      state.lists = state.lists.filter(list => list !== action.value);
      break;
    default:
      break;
  }

  return state;
}

export default reducer;
