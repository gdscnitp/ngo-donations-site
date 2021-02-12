import React, { useState } from "react";
import "./Video-popup.css";
import ReactPlayer from "react-player";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Videopopup = () => {
  const [Status, setStatus] = useState(true);
  return (
    <div>
      {Status ? (
        <div className="popup">
          <AiOutlineCloseCircle id="x11" onClick={() => setStatus(!Status)} />
          <div className="wrapper">
            <ReactPlayer
              className="player"
              playing
              url="https://youtu.be/WhWc3b3KhnY"
              width="100%"
              height="100%"
            />
          </div>{" "}
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};
