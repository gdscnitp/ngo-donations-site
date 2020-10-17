import React from 'react'
import  {SearchBar} from './SearchBar'
import  './SearchBar.css'
import  './Navbar.css'


 

export const Navbar = () => {

  function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  } 
    return(
    
      <div class="menu menu--active" id="menu">
        <div class = "logo">
        <img src="logo192.png" alt="Aastha Sinha Image" class="picture"></img>
        <div class = "search-bar">
          <SearchBar></SearchBar>
        </div>
        </div>
        
        
      <div class="container">
        <div class="row">
          <div class="menu__wrapper d-none d-lg-block col-md-12" >
            <nav class="">
              <ul>
                <li><a href="#">Signup/Login</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </nav>
          </div>
          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
            <a href="#">Events</a>
            <a href="#">About us</a>
            <a href="#">FAQs</a>
            <a href="#">Signup/Login</a>
          </div>
          <div class="menu__wrapper col-md-12 d-lg-none" >
            <button type="button" class="menu__mobile-button" onClick={openNav}>
              <span><i class="fa fa-bars" aria-hidden="true"></i></span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
    
    )
}





