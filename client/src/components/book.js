import React from 'react'
import HTMLFlipBook from "react-pageflip";
import './style.css'

function MyBook(props) {
  return (
    <HTMLFlipBook width={450}
    height={600} maxShadowOpacity={0.5} ma>
      <div className="demoPageOdd">
         <div className="page-odd">
         <center>
         <img src="https://www.adyogi.com/hs-fs/hubfs/about-us.png?width=1563&name=about-us.png" alt="" id="aboutus"/>
	      <h1>AboutUs</h1>
          </center>
         </div>
      </div>
      <div className="demoPageEven">
          <div className="page-even">
          <div className="desc">
              <center>

          <h3>This is a Muck In App</h3>
          <p>This app deals with the donation type of things</p>
    
              </center>
          </div>
          </div>
      </div>
      <div className="demoPageOdd">
      <div className="page-odd">
      <div className="Heading">
              <h1>Our Developers</h1>
          </div>
      </div>
      </div>
      <div className="demoPageEven">
          <div class="page-even">
          <div className="dev">
              <div className="member">
                <center>
                 <img className = "display" src="https://media-exp1.licdn.com/dms/image/C5603AQHXr1TBSJGjTw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=Kdm4MkouiZfig5fPao0mLl4o2RfBqupWK7ABnjU3R48" alt="not" />
                  <p>Rishabh</p>
                </center>
              </div>
          </div>
          <div className="dev">
              <div className="member">
                <center>
                  <img className ="display" src="https://media-exp1.licdn.com/dms/image/C5103AQGx9ejln11v4g/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=jvsjGLUEnr9z8wPpwB1W0oEo7L2fx4ee2OqnZ9rTIhg" alt="not"/>
                  <p>Arnav</p>
                </center>
              </div>
          </div>

          </div>
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;