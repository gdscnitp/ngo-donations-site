import React from "react";
import { SearchBar } from "./SearchBar";
import "./SearchBar.css";
import "./Navbar.css";

export const Navbar = () => {
  function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  return (
    <div className="menu menu--active" id="menu">
      <div className="logo">
        <img src="logo192.png" alt="react logo" className="picture"></img>
        <div className="search-bar">
          <SearchBar></SearchBar>
        </div>
      </div>
      <div className="col-12">
        <div className="row d-flex justify-content-end">
          <div className="menu__wrapper d-none d-lg-block col-md-12">
            <nav className="">
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
          <div id="mySidebar" className="sidebar">
            <button className="closebtn" onClick={closeNav}>
              ×
            </button>
            <a href="https://www.google.co.in/">Events</a>
            <a href="https://www.google.co.in/">About us</a>
            <a href="https://www.google.co.in/">FAQs</a>
            <a href="https://www.google.co.in/">Signup/Login</a>
          </div>
          <div className="menu__wrapper col-md-12 d-lg-none">
            <button
              type="button"
              className="menu__mobile-button"
              onClick={openNav}
            >
              <span>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
