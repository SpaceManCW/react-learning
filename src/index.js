//导入React文件
import React from "react";
import ReactDOM from "react-dom";
// import Hello from "./component/demo01";
// import Demo02 from "./component/demo02";
//import Comment from "./component/demo03";
//import Demo04 from "./component/demo04";
// import Demo05 from "./component/demo05";
// import Demo06 from "./component/demo06";
import Demo07 from "./component/demo07";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello /> */}
        {/* <Demo02 /> */}
        {/* <Comment /> */}
        {/* {this.props.children} */}
        {/* <Demo05 /> */}
        {/* <Demo06 /> */}
        <Demo07 />

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
