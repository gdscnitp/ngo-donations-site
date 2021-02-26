import React from "react";
import MyBook from "./../../components/home/book";
import Cause from "./../../components/home/cause";
import Stories from "./../../components/home/stories";
import News from "./../../components/home/news";
import Rating from "./../../components/home/Rating";
import Carousel from "./../../components/carousel/carousel.js";

const Homepage = () => {
  return (
    <center> 
<Carousel/>
<br />
<br />
<br />
      <h3>
        <strong>Recent Events</strong>
      </h3>
      <Stories />
      <br />
      <br />
      <h3>
        <strong>Why Should I Care?</strong>
      </h3>
      <br />
      <News />
      <br />
      <br />
      <br />
      <Cause />
      <br />
      <h3>
        <strong>About Us BOOK!</strong>
      </h3>
      <MyBook />
      <br />
      <br />
      <br />
      <Rating />
    </center>
  );
};

export default Homepage;
