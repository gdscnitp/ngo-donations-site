import React from "react";
import c1 from "./images/1.jpg";
import c2 from "./images/2.jpg";
import c3 from "./images/3.jpg";

const EventCards = () => {
  return (
    <>
      <div className="container mt-5" id="card-cont">
        <div className="col-9">
          <div className="row" id="head">
            <h1 className="find-event">Find an Event</h1>
          </div>

          <div className="row" id="search">
            <div className="active-cyan-4 mt-3 col-md-10">
              <input
                class="form-control search-form"
                type="text"
                placeholder="Search an Event"
                aria-label="Search"
              />
            </div>
          </div>

          <div className="card mt-3 cardss">
            <div className="row">
              <div className="col-md-3 class5">
                <img
                  src={c1}
                  alt="Prathma"
                  className="img-responsive image-card"
                />
              </div>
              <div className="col-md-6">
                <div className="class1">
                  <h2 className="card-title mt-2 card-heading">Prathma</h2>
                </div>
                <div className="class2">
                  <p className="paragraph">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    &nbsp;October 31, 2020
                  </p>
                </div>
                <div className="class3">
                  <p className="para-1">
                    Pratham is an innovative learning organization created to
                    improve the quality of education in India. Established in
                    1995 to provide education to children in the slums of
                    Mumbai.
                  </p>
                </div>
                <div className="class4">
                  <button className="btn btn-warning card-button">
                    Know More!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3 cardss">
            <div className="row">
              <div className="col-md-3 class5">
                <img
                  src={c2}
                  alt="Education"
                  className="img-responsive image-card"
                />
              </div>
              <div className="col-md-6">
                <div className="class1">
                  <h2 className="card-title mt-2 card-heading">Education</h2>
                </div>
                <div className="class2">
                  <p className="paragraph">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    &nbsp;October 31, 2020
                  </p>
                </div>
                <div className="class3">
                  <p className="para-1">
                    Girls' education is a strategic development priority. Better
                    educated women tend to be more informed about nutrition and
                    healthcare, have fewer children, marry at a later age.
                  </p>
                </div>
                <div className="class4">
                  <button className="btn btn-warning card-button">
                    Know More!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3 cardss">
            <div className="row">
              <div className="col-md-3 class5">
                <img
                  src={c3}
                  alt="Child"
                  className="img-responsive image-card"
                />
              </div>
              <div className="col-md-6">
                <div className="class1">
                  <h2 className="card-title mt-2 card-heading">Child</h2>
                </div>
                <div className="class2">
                  <p className="paragraph">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    &nbsp;October 31, 2020
                  </p>
                </div>
                <div className="class3">
                  <p className="para-1">
                    There are 36 million unemployed youth in India. Of these 24
                    million live in villages and substantial number move to
                    cities in search of employment.
                  </p>
                </div>
                <div className="class4">
                  <button className="btn btn-warning card-button">
                    Know More!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </>
  );
};
export default EventCards;
