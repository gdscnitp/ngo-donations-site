import React, { Component } from "react";

export default class Newslist extends Component {
  state = [
    {
      title: "Kanpur city under poverty",
      desc:
        "this tells that all the buisness settled over here is going down and down which is not a good sign for the upcoming days",
    },
    {
      title: "Varnasi",
      desc: "The city oh bhole",
    },
  ];
  render() {
    var list = [];
    this.state.forEach((news) => {
      list.push(
        <p>
          <div className="card">
            <div className="header">
              <h2>{news.title}</h2>
            </div>
            <div className="desc">{news.desc}</div>
          </div>
        </p>
      );
    });
    return (
      <div>
        <div className="list-container">{list}</div>
      </div>
    );
  }
}
