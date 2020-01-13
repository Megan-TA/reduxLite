/*
    第一版 完全不封装使用redux
*/

import React from "react";
import store from "../store";
import actions from "../store/actions/todo";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: store.getState().t.lists
    };

    this.unsubscribe = null;
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        ...this.state,
        lists: store.getState().t.lists
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onKeyDown={e => {
            if (e.keyCode === 13) {
              store.dispath(actions.add(e.target.value));
            }
          }}
        />

        {this.state.lists.map((list, index) => {
          return (
            <div key={index}>
              <p>{list}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
