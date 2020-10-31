import React from "react";
import Navbar from "../Event Page/Navbar";
import Carousel from "./Carousel";
import Feed from "./Feedback Cards";
import "./Feedback.css";
import Button from "./Buttons";

function Feedback() {
    return (
      <>
        <Navbar />
        <Carousel />
        <Button />
        <Feed />
        
        
      </>
    );
  }

  export default Feedback;