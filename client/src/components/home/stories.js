import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Stories extends Component {
  render() {
    return (
      <div className="top-stories">
        <OwlCarousel
          className="owl-theme"
          margin={100}
          loop
          freeDrag={true}
          touchDrag={true}
          autoplay={true}
          autoplayTimeout={2000}
          center={true}
          autoplayHoverPause
        >
          <div class="item rounded-circle">
            <img
              className="w-100"
              src="https://qph.fs.quoracdn.net/main-qimg-28982e7d4baef6a74e15681121af3a98"
              alt="stories"
            />
          </div>
          <div class="item">
            <img
              className=" w-100 "
              src="https://www.motocms.com/blog/wp-content/uploads/2017/11/1040-563-3.jpg"
              alt="stories"
            />
          </div>
          <div class="item">
            <img
              className=" w-100"
              src="https://www.iranfocus.com/en/wp-content/uploads/2019/05/iran-57-million-Below-the-Poverty-Line-750.jpg"
              alt="stories"
            />
          </div>
          <div class="item">
            <img
              className="w-100"
              src="https://www.unitedwaymumbai.org/storage/campaign_pics/SMARTPHONE%20_%20TAB%20thumb2.png"
              alt="stories"
            />
          </div>
          <div class="item">
            <img
              className=" w-100"
              src="https://www.indianfolk.com/wp-content/uploads/2018/09/1421321.large_.jpg"
              alt="stories"
            />
          </div>
          <div class="item">
            <img
              className=" w-100"
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/03/726359-foodwaste-090318.jpg"
              alt="stories"
            />
          </div>
          <div class="item">
            <img
              className=" w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRezDzzVpIVnHERRZJohhp6m3rWZJxaqxd19w&usqp=CAU"
              alt="stories"
            />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
