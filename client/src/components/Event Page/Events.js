import React from "react";
import "./Events.css";
import Filter from "./Filter";
import Cover from "./Cover";
import EventCards from "./Event Cards";

function Events() {
  return (
    <>
      
      <Cover />
      <div className="hello">
        <Filter />
        <EventCards />
      </div>
    </>
  );
}

export default Events;
