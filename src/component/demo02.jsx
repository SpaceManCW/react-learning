import React from "react";

class Demo02 extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "hhhhh",
      city: "sh",
      checked: false,
    };
    this.txtRef = React.createRef();
  }
  handleClick = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  getTxt = () => {
    console.log(this.txtRef.current.value);
  };
  render() {
    return (
      <div>
        <input
          name="msg"
          type="text"
          value={this.state.msg}
          onChange={this.handleClick}
        />
        <br />
        {/* ref非受控组件 */}
        <input type="text" ref={this.txtRef} />
        <button onClick={this.getTxt}>获取文本框值</button>
        <br />
        <select
          name="city"
          value={this.state.value}
          onChange={this.handleClick}
        >
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="hz">杭州</option>
        </select>
        <input
          name="checked"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleClick}
        />
      </div>
    );
  }
}

export default Demo02;
