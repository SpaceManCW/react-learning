//导入React文件
import React from "react";
import ReactDOM from "react-dom";
import Main from './component/main'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
// 双标签内有子元素，props就会有children属性
ReactDOM.render(
  // <Home>
  //   <p>这是对children的测试</p>
  // </Home>,
  <Home />,
  document.getElementById("root")
);
