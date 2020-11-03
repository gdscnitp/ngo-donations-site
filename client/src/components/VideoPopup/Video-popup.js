import React from 'react'
import "./Video-popup.css"
import ReactPlayer from "react-player";
import { AiOutlineCloseCircle } from "react-icons/ai";


export const Videopopup = () => {
    
    return(
     <div className="body">
      <div className="popup">
      <AiOutlineCloseCircle id="x" onClick="" />
           <div className="wrapper"> 
           <ReactPlayer
           className="player"
           playing
             url="https://youtu.be/WhWc3b3KhnY"
                 width='100%'
                 height='100%' 
                 />
          </div>
        
     </div>
    
            
     </div>
    )
}