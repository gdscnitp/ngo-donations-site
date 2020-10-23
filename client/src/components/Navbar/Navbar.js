import React from "react";
import { SearchBar } from "../Searchbar/SearchBar";
import "../Searchbar/SearchBar.css";
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
        <img src="logo192.png" alt="react logo" class="picture"></img>
        <div class="search-bar">
          <SearchBar></SearchBar>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="menu__wrapper d-none d-lg-block col-md-12">
            <nav class="">
              <ul>
                <li>
                  <a href="https://www.google.co.in/">Signup/Login</a>
                </li>
                <li>
                  <a href="https://www.google.co.in/">FAQs</a>
                </li>
                <li>
                  <a href="https://www.google.co.in/">About us</a>
                </li>
                <li>
                  <a href="https://www.google.co.in/">Events</a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="mySidebar" class="sidebar">
            <button class="closebtn" onClick={closeNav}>
              ×
            </button>
            <a href="https://www.google.co.in/">Events</a>
            <a href="https://www.google.co.in/">About us</a>
            <a href="https://www.google.co.in/">FAQs</a>
            <a href="https://www.google.co.in/">Signup/Login</a>
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
