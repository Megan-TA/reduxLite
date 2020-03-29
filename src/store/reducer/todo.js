import * as types from "../types";

let initState = {
  lists: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      state.lists.push(action.value);
      return {
        lists: state.lists
      };
    case types.DEL_TODO:
      return {
        lists: state.lists.filter(list => list !== action.value)
      };
    default:
      return state;
  }
}

export default reducer;
