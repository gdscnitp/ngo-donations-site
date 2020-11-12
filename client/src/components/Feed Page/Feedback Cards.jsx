import React from "react";
import icon from "./assests/image 21.svg";

const Feed = () => {
  return (
    <>
      <div className="container col-10">
        <div className="card mt-5 feed-card">
          <div className="row">
          <div className="col-md-2">
              <img src={icon} className="feed-img" alt="Feed" />
            </div>
            <div className="col-md-8">
              <p className="mt-3 mb-3 text-center">
                Ratings
              </p>
              <p className="text-center feed-para">organisation/Individual who need help Nearby Cards</p>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success mt-5 feed-card-btn">Contact</button>
            </div>
          </div>
        </div>
        <div className="card mt-5 feed-card">
          <div className="row">
          <div className="col-md-2">
              <img src={icon} className="feed-img" alt="Feed1"/>
            </div>
            <div className="col-md-8">
            <p className="mt-3 mb-3 text-center">
                Ratings
              </p>
              <p className="text-center feed-para">organisation/Individual who need help Nearby Cards</p>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success mt-5 feed-card-btn">Contact</button>
            </div>
          </div>
        </div>
        <div className="card mt-5 feed-card">
          <div className="row">
          <div className="col-md-2">
              <img src={icon} className="feed-img" alt="Feed2" />
            </div>
            <div className="col-md-8">
            <p className="mt-3 mb-3 text-center">
                Ratings
              </p>
              <p className="text-center feed-para">organisation/Individual who need help Nearby Cards</p>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success mt-5 feed-card-btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="feed-hr"/>
    </>
  );
};

export default Feed;
