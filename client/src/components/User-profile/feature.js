import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Userstyle.css'
function Feature(props) {
    return (
     <div class="User-profile-profile-page-block">
         <div class="User-profile-profile-picture bg-gradient bg-primary">
           <img src={props.img} alt="featured pics" width="44" height="44"/>
         </div>
   </div>
    );
  }
 
  
  export default Feature;