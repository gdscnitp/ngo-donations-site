import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";
import Dev from './subComponents/dev'

function MyBook(props) {
  return (
  
    <HTMLFlipBook width={400} height={600} swipeDistance={0} maxShadowOpacity={0.5} >
   
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
          <div className="footer-of-page" >
            <p style={{fontSize: '10px'}}>Click To change Page!<span style={{fontSize: '30px'}}>&rarr;</span> </p>
          </div>
        </div>
      </div>
      <div className="demoPageEven">
        <div className="page-even">
          <div className="desc">
            <center>
              <h3>This is a Muck In App</h3>
              <p>
                <ul>
                  <li>
                    Our project aims at reducing the gap between the people who
                    are willing to help and the people who are searching for
                    such volunteers.
                  </li>
                  <li>
                    It will provide a way for the best utilisation of the
                    resources,one thing discarded by someone can be of ultimate
                    use to others.
                  </li>
                  <li>
                    It will help in increasing the involvement of more people in
                    the NGOs as the task will be digitalized and so would not
                    require much effort
                  </li>
                </ul>
              </p>
            </center>
          </div>
        </div>
        <div className="footer-of-page" >
            <p style={{fontSize: '10px'}}>Click To change Page!<span style={{fontSize: '30px'}}>&rarr;</span> </p>
          </div>
      </div>
      <div className="demoPageOdd">
        <div className="page-odd">
          <div className="Heading">
            <h1>Our Developers</h1>
          </div>
        </div>
        <div className="footer-of-page" >
            <p style={{fontSize: '10px'}}>Click To change Page! <span style={{fontSize: '30px'}}>&rarr;</span> </p>
          </div>
      </div>
      <div className="demoPageEven">
        <div class="page-even">
          <div className="dev-proj">
            <Dev />
        </div>
        </div>
        <div className="footer-of-page" >
            <p style={{fontSize: '10px'}}>Click To change Page! <span style={{fontSize: '30px'}}>&rarr;</span> </p>
          </div>
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;
