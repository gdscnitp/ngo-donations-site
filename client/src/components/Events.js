import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cover from "./Cover";
import EventCards from "./Event Cards";

function Events() {
  return (
    <>
      <Navbar />
      <Cover />
      <div className="hello">
        <Filter />
        <EventCards />
      </div>
    </>
  );
}

export default Events;
