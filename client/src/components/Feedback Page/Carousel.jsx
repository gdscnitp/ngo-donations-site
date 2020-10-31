import React from "react";
import i1 from "./images/1.jpg";
import i2 from "./images/2.jpg";
import i3 from "./images/3.jpg";

const Carousel = () => {
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={i1} class="d-block w-100" alt="First" />
    </div>
    <div class="carousel-item">
      <img src={i2} class="d-block w-100" alt="Second" />
    </div>
    <div class="carousel-item">
      <img src={i3} class="d-block w-100" alt="Third" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </>
    )
}

export default Carousel;