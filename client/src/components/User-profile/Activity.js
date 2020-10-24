import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Userstyle.css'
function Activity(props) {
    return (
        <div  className="User-profile-activities-content" > 
        <div className="User-profile-activity-img">        
        <img src={props.img}  alt="Activity pics" width="60" height="60"/>         </div>        
        <div className="User-profile-activity-center-detail">
        <textarea row="2" cols="30"  placeholder={props.description} />         
        </div>        
        <i class="fa fa-trash User-profile-box-i" aria-hidden="true"></i>
        <i class="fa fa-pencil User-profile-box-i" aria-hidden="true"></i>
        </div>
    );
  }
 
  
  export default Activity;