import React from "react";

const Carousel1 = () => {
  return (
    <>
      <section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" checked />
        <input type="radio" name="slider" id="s3" checked />
        <input type="radio" name="slider" id="s4" checked />
        <input type="radio" name="slider" id="s5" checked />

        <label for="s1" id="slide1">
          <img
            src="https://c0.wallpaperflare.com/preview/977/488/918/alliance-blue-daylight-facial-expression.jpg"
            alt="img"
            className="img1"
          />
        </label>
        <label for="s2" id="slide2">
          <img
            src="https://thefunquotes.com/wp-content/uploads/2020/10/best-practices-for-ngo-websites.jpg"
            alt="img"
            className="img2"
          />
        </label>
        <label for="s3" id="slide3">
          <img
            src="https://reliefindiatrustngoinindia.files.wordpress.com/2014/12/15eda-happy-childrens2bmaking2bresponsible2bat2brelief2bindia2btrust.jpg"
            alt="img"
            className="img3"
          />
        </label>
        <label for="s4" id="slide4">
          <img
            src="https://wallpapercave.com/wp/wp6608514.jpg"
            alt="img"
            className="img4"
          />
        </label>
        <label for="s5" id="slide5">
          <img
            src="https://3blaws.s3.amazonaws.com/images/poverty-education-facts.jpg"
            alt="img"
            className="img5"
          />
        </label>
      </section>
    </>
  );
};

export default Carousel1;
