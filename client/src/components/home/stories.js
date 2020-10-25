import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import story from "./stories.svg";

export default class Stories extends Component {
  render() {
    return (
      <div className="top-stories">
        <OwlCarousel
          className="owl-theme"
          margin={100}
          loop
          autoplay={true}
          autoplayTimeout={2000}
          autoplayHoverPause
        >
          <div class="item ">
            <img className="w-10 rounded-circle" src={story} alt="stories" />
          </div>
          <div class="item ">
            <img className="w-100 rounded-circle" src={story} alt="stories" />
          </div>
          <div class="item">
            <img className=" w-100 " src={story} alt="stories" />
          </div>
          <div class="item">
            <img className=" w-100" src={story} alt="stories" />
          </div>
          <div class="item">
            <img className="w-100" src={story} alt="stories" />
          </div>
          <div class="item">
            <img className=" w-100" src={story} alt="stories" />
          </div>
          <div class="item">
            <img className=" w-100" src={story} alt="stories" />
          </div>
          <div class="item">
            <img className=" w-100" src={story} alt="stories" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
