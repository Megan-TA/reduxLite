// 接受一个reducer reducer必须是一个新对象
function createStore(reducer) {
  let state;

  const getState = () => state;

  let listeners = [];

  function dispath(action) {
    state = reducer(state, action);

    listeners.forEach(fn => fn());
  }

  function subscribe(fn) {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter(currentFn => currentFn !== fn);
    };
  }

  // 赋初始值
  dispath({});

  return {
    dispath,
    getState,
    subscribe
  };
}
// 合并多个reducer为一个新的reducer
// combineReducer({ c: {}, b: {} })
export function combineReducer(reducers) {
  return (state = {}, action) => {
    let newState = {};
    for (let key in reducers) {
      // 执行每个reducer拿到定义的初始值
      const s = reducers[key](state[key], action);

      newState[key] = s;
    }

    return newState;
  };
}

export { createStore };
