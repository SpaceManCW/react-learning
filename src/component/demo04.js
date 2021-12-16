//Context的使用方法

import React from "react";
import "../style/demo.css";
// 先导入props校验的包
import PropTypes from "prop-types";

const { Provider, Consumer } = React.createContext();

class Demo04 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render(h) {
    return (
      <Provider value="pink">
        <div className="son" style={{ width: 300, height: 200 }}>
          <Son1 />
        </div>
      </Provider>
    );
  }
}

const Son1 = () => {
  return (
    <div className="son">
      <Son2 />
    </div>
  );
};
const Son2 = () => {
  return (
    <div className="son">
      <Son3 txt="使用props-types对props进行校验" />
    </div>
  );
};

const Son3 = (props) => {
  return (
    <div className="son">
      <Consumer>{(data) => <span>我是子节点--{data}</span>}</Consumer>
      {props.txt} {props.con}
    </div>
  );
};
//添加props校验....注意大小写。。。。
Son3.propTypes = {
  txt: PropTypes.string,
};
Son3.defaultProps = {
  con: "默认的props",
};
export default Demo04;
