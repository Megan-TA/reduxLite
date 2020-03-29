import React from "react";

const Context = React.createContext();
class Provider extends React.Component {
  render() {
    return (
      <Context.Provider value={this.props.store}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Connect()(旧组件)
const Connect = (mapStateToProps, mapDispatchToProps) => Component => {
  return class Proxy extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {store => {
            // 状态变化需要更新视图 setState
            class High extends React.Component {
              constructor(props) {
                super(props);
                this.state = mapStateToProps(store.getState());

                // 记录旧的state 每次返回reducer做比较 同一个引用不更新
                this.oldState = store.getState();

                this.actions = mapDispatchToProps(store.dispath);
              }

              componentDidMount() {
                this.unsub = store.subscribe(() => {
                  if (this.oldState === store.getState()) return;

                  this.oldState = store.getState();

                  this.setState(mapStateToProps(store.getState()));
                });
              }

              componentWillUnmount() {
                this.unsub();
              }

              render() {
                return <Component {...this.state} {...this.actions} />;
              }
            }

            // 不能直接返回class High等类函数
            return <High></High>;
          }}
        </Context.Consumer>
      );
    }
  };
};

export { Provider, Connect };
