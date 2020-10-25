import React from "react";
import { SearchBar } from "../Searchbar/SearchBar";
import "./Navbar.css";

export const Navbar = () => {
  function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  return (
    <div class="menu menu--active" id="menu">
      <div class="logo">
        <a href="/"><img src="logo.svg" alt="react logo" class="pictureimg"></img></a>
        <div class="search-bar">
          <SearchBar></SearchBar>
        </div>
      </div>

      <div class="container navcontainer">
        <div class="row navrow">
          <div class="menu__wrapper d-none d-lg-block col-md-12">
            <nav class="navbar">
              <ul>
                <li>
                  <a href="/signup">Signup/Login</a>
                </li>
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
                <li>
                  <a href="/aboutus">About us</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="mySidebar" class="sidebar">
            <button class="closebtn" onClick={closeNav}>
              ×
            </button>
            <a href="/events">Events</a>
            <a href="/aboutus">About us</a>
            <a href="/faqs">FAQs</a>
            <a href="/signup">Signup/Login</a>
          </div>
          <div class="menu__wrapper col-md-12 d-lg-none">
            <button type="button" class="menu__mobile-button" onClick={openNav}>
              <span>
                <i class="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
