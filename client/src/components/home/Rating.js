import React, { Component } from "react";
import Review from "./review";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Rating extends Component {
  render() {
    return (
      <div className="ratings">
        <div className="heading">
        <h3>What Do People Say?</h3>
        </div>
        <OwlCarousel
          className="owl-theme"
          items={1}
          margin={100}
          loop
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause
        >
          <div class="item rounded-circle">
            <Review id="1" />
          </div>
          <div class="item rounded-circle">
            <Review id="2" />
          </div>
          <div class="item rounded-circle">
            <Review id="0" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
