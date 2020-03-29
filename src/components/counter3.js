/*
    第三版 使用connect包装
*/

import React from "react";
import { Connect } from "../lib/react-redux";

import actions from "../store/actions/counter";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>计数器 {this.props.number} </div>

        <button
          onClick={() => {
            this.props.add(1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.minus(1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.c.number
  };
};

const mapDispatchToProps = dispath => {
  return {
    add(n) {
      dispath(actions.add(n));
    },
    minus(n) {
      dispath(actions.minus(n));
    }
  };
};

// 第一种写法
export default Connect(mapStateToProps, mapDispatchToProps)(Counter);

// 第二种写法
// export default Connect(mapStateToProps, mapDispatchToProps)(Counter);
