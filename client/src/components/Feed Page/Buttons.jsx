import React from "react";

const Button = () => {
  return (
    <>
      <div className="container mb-5 btn-cont">
        <a href="/donate">
        <button className="btn btn-warning feed-btn-1">Donate Now</button></a>
        < a href="/need">
        <button className="btn btn-warning feed-btn-2">
          Create New Request
        </button></a>
      </div>
    </>
  );
};

export default Button;
