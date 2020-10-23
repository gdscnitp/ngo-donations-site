import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";

function MyBook(props) {
  return (
    <HTMLFlipBook width={450} height={600} swipeDistance={0} maxShadowOpacity={0.5}>
      <div className="demoPageOdd">
        <div className="page-odd">
          <center>
            <img
              src="https://www.adyogi.com/hs-fs/hubfs/about-us.png?width=1563&name=about-us.png"
              alt="about us"
              id="aboutus"
            />
            <h1>AboutUs</h1>
          </center>
        </div>
      </div>
      <div className="demoPageEven">
        <div className="page-even">
          <div className="desc">
            <center>
              <h3>This is a Muck In App</h3>
              <p>
                <ul>
                  <li>Our project aims at reducing the gap between the people who are willing to help and the people who are searching for such volunteers.</li>
                  <li>It will provide a way for the best utilisation of the resources,one thing discarded by someone can be of ultimate use to others.</li>
                  <li>It will help in increasing the involvement of more people in the NGOs as the task will be digitalized and so would not require much effort</li>
                </ul>
              </p>
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
                <img
                  className="display"
                  src="https://media-exp1.licdn.com/dms/image/C5603AQHXr1TBSJGjTw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=Kdm4MkouiZfig5fPao0mLl4o2RfBqupWK7ABnjU3R48"
                  alt="not"
                />
                <p>Rishabh</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
                  alt="not"
                />
                <p>Palak</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQGx9ejln11v4g/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=jvsjGLUEnr9z8wPpwB1W0oEo7L2fx4ee2OqnZ9rTIhg"
                  alt="not"
                />
                <p>Arnav</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
                  alt="not"
                />
                <p>Aarushi</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
                  alt="not"
                />
                <p>Devanshi</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
                  alt="not"
                />
                <p>Aastha</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="data:image/png;base64,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"
                  alt="not"
                />
                <p>Aditya</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
                  alt="not"
                />
                <p>Rakshita</p>
              </center>
            </div>
          </div>
          <div className="dev">
            <div className="member">
              <center>
                <img
                  className="display"
                  src="https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png"
                  alt="not"
                />
                <p>Aayesha</p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;
