//这tm就是子组件向父组件传递参数，只不过父组件给子组件传递的函数名叫render罢了。。。。搞这么费劲
import React from "react";
// import img from "../images/yuan.png";
class Demo06 extends React.Component {
  constructor(props) {
    super(props);
    //鼠标的位置
    this.state = {};
  }
  render() {
    return (
      <div>子对父传参，例子是获取鼠标位置，但是有bug，懒得改了，需要的时候把注释打开看看就行</div>
      // <div>
      //   {/* <Mouse
      //     render={(mouse) => {
      //       return (
      //         <p>
      //           鼠标位置：{mouse.x},{mouse.y}
      //         </p>
      //       );
      //     }}
      //   /> */}

      //   {/* 可以改写为children的模式，子组件通过props.children就可以拿到父组件的方法。子组件传递给children的数据，父组件可以以data => {}的形式拿到 */}
      //   <Mouse>
      //     {(mouse) => {
      //       return (
      //         <p>
      //           鼠标位置：{mouse.x},{mouse.y}
      //         </p>
      //       );
      //     }}
      //   </Mouse>
      //   {/* <Mouse
      //     render={(mouse) => {
      //       return (
      //         <img
      //           src={img}
      //           alt="qiu"
      //           style={{
      //             position: "absolute",
      //             top: mouse.y - 50,
      //             left: mouse.x - 40,
      //           }}
      //         />
      //       );
      //     }}
      //   /> */}
      //   <Mouse>
      //     {(mouse) => {
      //       return (
      //         <img
      //           src={img}
      //           alt="qiu"
      //           style={{
      //             position: "absolute",
      //             top: mouse.y - 50,
      //             left: mouse.x - 40,
      //           }}
      //         />
      //       );
      //     }}
      //   </Mouse>
      // </div>
    );
  }
}

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     //鼠标的位置
//     this.state = {
//       x: 0,
//       y: 0,
//     };
//   }

//   //鼠标移动事件的事件处理程序
//   handleMouseMove = (e) => {
//     this.setState({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   };
//   //监听鼠标的移动事件
//   componentDidMount() {
//     window.addEventListener("mousemove", this.handleMouseMove);
//   }

//   //解除鼠标移动事件
//   componentWillUnmount() {
//     window.removeEventListener("mousemove", this.handleMouseMove);
//   }
//   render() {
//     return this.props.children(this.state);
//   }
// }
export default Demo06;
