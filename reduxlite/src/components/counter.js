/*
    第一版 完全不封装使用redux
    
*/

import React from "react";
import store from "../store";
import * as Types from "../store/types";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: store.getState().c.number
    };

    this.unsubscribe = null;
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().c.number
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <div>计数器 {this.state.number} </div>

        <button
          onClick={() => {
            store.dispath({ type: Types.INCREMENT, count: 2 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispath({ type: Types.DECREMENT, count: 2 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
