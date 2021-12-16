//类组件的使用，事件绑定，事件抽离，事件抽离导致的this指向问题解决方案

//第一步导入React
import React from "react";

//第二步创建组件
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    //第一种：使用bind方法
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  //第二种：声明事件时使用箭头函数
  //   handleClick = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }
  render() {
    return (
      <div>
        {" "}
        {/* 想要拿到state里的数据，this.state.xxx */}{" "}
        <div>
          <h1> 类组件 {this.state.count} </h1>{" "}
        </div>{" "}
        {/* 第三种 */}{" "}
        {/* <button onClick={() => this.handleClick()}>点击+1</button> */}{" "}
        <button onClick={this.handleClick}> 点击 + 1 </button>{" "}
      </div>
    );
  }
}

export default Hello;
