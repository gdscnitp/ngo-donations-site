import React, { Component } from "react";

export default class Newslist extends Component {
  state = [
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    },
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    }, 
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    }, 
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    },  
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    }, 
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    }, 
    {
      title: "News Header",
      desc: {
            less: "This paragraph contains the description of the news and this is use to detail the news headlines",
            more: "You have now clicked the read more button to read more text of the news and the detailing"
          },
      poster: "https://lh3.googleusercontent.com/-gyUaIX5ZvRm937PGDI33upRFRLCAinLWNu6lOLlEQgEWec4LLxgqF9-jmboOC9YE7GSHPJLXDw5HQPoU50=-p-h100-w100-rw"
    }

  ];

   
  render() {
    function myFunction(e) {
      e.preventDefault();
     var dots = document.getElementById("dots");
     var moreText = document.getElementById("more");
     var btnText = document.getElementById("read-more-btn");
   
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
      list.push(
        <p>
                    <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">{news.title}</h5>
                          <div className="news-detail">
                            <img 
                            className="w-25"
                            src={news.poster}
                            alt="news poster"
                            />
                            <div className="text-of-news">
                          <p class="card-text">{news.desc.less}
                          <span id="dots">....</span>
                          <span id="more">{news.desc.more}</span>
                          </p>
                          <a href="/" id="read-more-btn" onClick={myFunction} class="btn btn-primary">Read More</a>
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
