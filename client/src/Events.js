import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "./App.css";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Home from "./Home";
import Boots from "./Boots";

function Events() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="row d-flex">
        <div className=" col-12 col-md-8">
          <Boots />
        </div>
        <div className="col-12 col-md-4 order-first order-md-last d-flex justify-content-end">
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default Events;
