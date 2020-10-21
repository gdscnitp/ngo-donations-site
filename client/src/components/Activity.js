import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function Activity(props) {
    return (
        <div  className="activities-content" > 
        <div className="activity-img">        
        <img src={props.img}  alt="Activity pics" width="60" height="60"/>         </div>        
        <div className="activity-center-detail">
        <textarea row="2" cols="30"  placeholder={props.description} />         
        </div>        
        <i class="fa fa-trash box-i" aria-hidden="true"></i>
        <i class="fa fa-pencil box-i" aria-hidden="true"></i>
        </div>
    );
  }
 
  
  export default Activity;