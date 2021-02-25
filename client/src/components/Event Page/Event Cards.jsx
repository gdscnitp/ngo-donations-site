import React, { useState, useEffect } from "react";
import c1 from "./images/1.jpg";
import c2 from "./images/2.jpg";
import c3 from "./images/3.jpg";
import axios from "axios";
import Moment from "react-moment";

const EventCards = () =>  {
  const [data, setData] = useState("");
  const [isLoaded, setLoaded] = useState(false);


  const getData = async () => {
    const res = await axios.get("/events");
    setData(res);
  };

  const loadData = () => {
    setLoaded(!isLoaded)
  }
  useEffect(() => {
    alert("Loaded!");
    getData();
  },[isLoaded])


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
          <div className="row" id="load">
            <button className="success" onClick={() => loadData()}> &#10227; Load all Event</button>
          </div>
          {data.data !== undefined ? (
            data.data.length > 0 ? (
            data.data.map((data) => {
              return (
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
                        <h2 className="card-title mt-2 card-heading">
                          {data.name}
                        </h2>
                      </div>
                      <div className="class2">
                        <p className="paragraph">
                          <i class="fa fa-calendar" aria-hidden="true"></i>
                          &nbsp;<Moment type="Date">{data.startDate}</Moment>
                        </p>
                      </div>
                      <div className="class3">
                        <p className="para-1">{data.description}</p>
                      </div>
                      <div className="class4">
                        <button className="btn btn-warning card-button">
                          Know More!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>There Is no Event... Please Wait or try Again Later!</h1>
          )) : ("Please Wait!")}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
export default EventCards;
