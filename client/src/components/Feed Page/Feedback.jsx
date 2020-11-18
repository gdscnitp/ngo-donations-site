import React from "react";
import Navbar from "../Event Page/Navbar";
import Feed from "./Feedback Cards";
import "./Feedback.css";
import Button from "./Buttons";
import Tabbs from "./Tabbs";

function Feedback() {
  return (
    <>
      <Navbar />
      <Button />
      <Tabbs />
      <Feed />
    </>
  );
}

export default Feedback;
