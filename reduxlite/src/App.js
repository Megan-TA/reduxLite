import React from "react";
import "./App.css";

import Counter from "./components/counter";
import Counter2 from "./components/counter2";
import Todo from "./components/todo";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <div>第一版 完全不封装使用redux</div>
      <Counter />
      <hr />

      <div>第二版 拆分 使用actionCreator创建动作</div>
      <Counter2 />
      <hr />

      <Todo />
    </div>
  );
}

export default App;
