import React, { Component, useState } from "react";
import { SearchBar } from "../Searchbar/SearchBar";
import "./Navbar.css";
import { SignupPopup } from "../signup/SignupPopup";
import { useSelector } from "react-redux";

export function Navbar() {  // converted to functiona components to use the useSelector hook instead of storing complete state
  const [ addModelShow, setModelShow ] = useState(false);

  const isAlreadyLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const userName = useSelector(state => state.auth.user.email)

  function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  let ModelClose = () => setModelShow(false);

  return (
      <div class="menu menu--active" id="menu">
        <div class="logo">
          <a href="/">
            <img src="logo.svg" alt="react logo" class="pictureimg"></img>
          </a>
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
                    {
                      isAlreadyLoggedIn ? (
                        <div>
                          {"User: " + userName}
                        </div>
                      ) : 
                      (<>
                        <div onClick={() => setModelShow(true)}>
                          Signup/Login
                        </div>
                        <SignupPopup
                          show={addModelShow}
                          onHide={ModelClose}
                        />
                      </>)
                    }
                  </li>
                  <li>
                    <div href="/faqs">FAQs</div>
                  </li>
                  <li>
                    <div href="/about-us">About us</div>
                  </li>
                  <li>
                    <div href="/events">Events</div>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="mySidebar" class="sidebar">
              <button class="closebtn" onClick={closeNav}>
                ×
              </button>
              <div href="/events">Events</div>
              <div href="/about-us">About us</div>
              <div href="/faqs">FAQs</div>
              <div
                onClick={() => setModelShow(true)}
                style={{ color: "white", cursor: "pointer" }}
              >
                Signup/Login
              </div>
              <SignupPopup
                show={addModelShow}
                onHide={ModelClose}
              />
            </div>
            <div class="menu__wrapper col-md-12 d-lg-none">
              <button
                type="button"
                class="menu__mobile-button"
                onClick={openNav}
              >
                <span>
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
