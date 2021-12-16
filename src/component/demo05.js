import React from "react";

class Demo05 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <Counter count={this.state.count}> </Counter>
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1> 统计次数 {this.props.count} </h1>;
  }

  //要调用setState()更新状态，必须要放在if条件中
  //因为直接setState会导致递归更新
  //要拿到上一次的props通过prevProps参数拿到
  componentDidUpdate(prevProps) {
    console.warn("----子组件---生命周期钩子：componentDidUpdate");
    //正确做法比较更新前后的props是否相同来决定是否重新渲染组件
    console.log("上一次的props;", prevProps, " 当前的props:", this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({});
      //发送请求也要放在这里
    }
  }
}

export default Demo05;
