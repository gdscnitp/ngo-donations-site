import React, { Component } from "react";

export default class Newslist extends Component {
  state = [
    {
      id: 1,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
    {
      id: 2,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
    {
      id: 3,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
    {
      id: 4,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
    {
      id: 5,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
    {
      id: 6,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
    {
      id: 7,
      title: "News Header",
      desc: {
        less:
          "This paragraph contains the description of the news and this is use to detail the news headlines",
        more:
          "You have now clicked the read more button to read more text of the news and the detailing",
      },
      poster:
"https://image.shutterstock.com/image-vector/international-day-eradication-poverty-banner-260nw-1513555064.jpg"    },
  ];

  
  render() {
   function myFunction(e) {
      e.preventDefault();
      var i = e.target.getAttribute('value');
      var btnStr = "read-more-btn"+i;
      var moreStr = "more"+i;
      var dotStr = "dots"+i;
   var dots = document.getElementById(dotStr);
    var moreText = document.getElementById(moreStr);
    var btnText = document.getElementById(btnStr);
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
    var list = [];
    this.state.forEach((news) => {
      var btnStr = "read-more-btn" + news.id;
      var moreStr = "more" + news.id;
      var dotStr = "dots" + news.id;
      list.push(
        <p>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{news.title}</h5>
              <div className="news-detail">
                <img className="" src={news.poster} alt="news poster" />
                <div className="text-of-news">
                  <p class="card-text">
                    {news.desc.less}
                    <span id={dotStr} style={{display: 'inline'}}>....</span>
                    <span id={moreStr} style={{display: 'none'}}>{news.desc.more}</span>
                  </p>
                  <a
                    href="/"
                    id={btnStr}
                    value={news.id}
                    onClick={myFunction}
                    class="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
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
