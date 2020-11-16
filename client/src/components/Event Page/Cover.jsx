import React from "react";
import cover from "./images/cover.jpg";

const Cover = () => {
  return (
    <>
      <section id="header" className="">
        <div className="row">
          <div className="col-lg-12 order-1 order-lg-2">
            <img src={cover} className="image" alt="Cover" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Cover;
