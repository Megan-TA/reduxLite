import React from "react";
import "./App.css";

import { Provider } from "./lib/react-redux";
import store from "./store";

import Counter from "./components/counter";
import Counter2 from "./components/counter2";
import Counter3 from "./components/counter3";
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      <div>
        <h3>不使用react-redux</h3>
        <div>第一版 完全不封装使用redux</div>
        <Counter />
        <hr />

        <div>第二版 拆分 使用actionCreator创建动作</div>
        <Counter2 />
        <hr />

        <Todo />
      </div>

      <div>
        <h3>使用react-redux改造</h3>

        <Provider store={store}>
          <Counter3 />
          {/* <Todo /> */}
        </Provider>
      </div>
    </div>
  );
}

export default App;
