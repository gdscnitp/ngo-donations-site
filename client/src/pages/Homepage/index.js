import React from "react";
import MyBook from "./../../components/home/book";
import Cause from "./../../components/home/cause";
import Stories from "./../../components/home/stories";
import News from "./../../components/home/news";
import Rating from "./../../components/home/Rating";

const Homepage = () => {
  return (
    <center>
      <h3>
        <strong>Recent Events</strong>
      </h3>
      <br />
      <br />
      <Stories />
      <br />
      <br />
      <h3>
        <strong>Why Should I Care?</strong>
      </h3>
      <News />
      <Cause />
      <h3>
        <strong>About Us BOOK!</strong>
      </h3>
      <MyBook />
      <br />
      <br />
      <h3>What Do People Say?</h3>
      <br />
      <Rating />
    </center>
  );
};

export default Homepage;
