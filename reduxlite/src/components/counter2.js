/*
    第二版 使用actionCreator创建动作
*/

import React from "react";
import store from "../store";
import actions from "../store/actions/counter";

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
            store.dispath(actions.add(2));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispath(actions.minus(2));
          }}
        >
          -
        </button>
      </div>
    );
  }
}
