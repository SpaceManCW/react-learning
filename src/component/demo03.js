import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { id: 1, name: "wuxie", content: "啊对对对" },
        { id: 2, name: "zhuangqiling", content: "带我回家" },
        { id: 3, name: "wangpanhzi", content: "hahahahah" },
      ],
      pname: "",
      pcontent: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () => {
    const { comments, pname, pcontent } = this.state;
    const newComments = [
      {
        id: Math.random(),
        name: pname,
        content: pcontent,
      },
      ...comments,
    ];
    if (pcontent !== "" && pname !== "") {
      this.setState({
        comments: newComments,
        pname: "",
        pcontent: "",
      });
    }
  };
  renderList = () => {
    const { comments } = this.state;
    return comments.length === 0 ? (
      <div>
        <h4> 暂无评论 </h4>{" "}
      </div>
    ) : (
      <ul>
        {" "}
        {comments.map((item) => (
          <li key={item.id}>
            <h3> 评论人: {item.name} </h3> <p> 评论内容: {item.content} </p>{" "}
          </li>
        ))}{" "}
      </ul>
    );
  };
  //列表渲染别忘记加key
  render() {
    const { pname, pcontent } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            name="pname"
            value={pname}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="pcontent"
            value={pcontent}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button onClick={this.handleClick}> 发表评论 </button>{" "}
        </div>{" "}
        <div> {this.renderList()} </div>{" "}
      </div>
    );
  }
}
export default Comment;
