import React, { useState } from "react";
import { SearchBar } from "../Searchbar/SearchBar";
import "./Navbar.css";
import { SignupPopup } from "../signup/SignupPopup";
import { useSelector } from "react-redux";

export function Navbar() {  // converted to functiona components to use the useSelector hook instead of storing complete state
  const [ addModelShow, setModelShow ] = useState(false);

  const userAuth = useSelector(state => state.auth)
  const isAlreadyLoggedIn = userAuth.isLoggedIn;

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
                          {"User: " + userAuth.user.email}
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
                  <li><a href="/donate">
                    <div>Donate</div>
                    </a>
                  </li>
                  <li>
                    <div href="/about-us">About us</div>
                  </li>
                   <li><a href="/feedback">
                    <div>Feed</div>
                    </a>
                  </li>
                  <li><a href="/need">
                    <div>Need</div>
                    </a>
                  </li>
                   <li><a href="/videopopup">
                    <div>How to Use</div>
                    </a>
                  </li>
                  <li><a href="/faqs">
                    <div>FAQs
                    </div>
                    </a>
                  </li>
                  <li>
                    <div>About us</div>
                  </li>
                  <li><a href="/events">
                    <div>Events</div></a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="mySidebar" class="sidebar">
              <button class="closebtn" onClick={closeNav}>
                ×
              </button>
               <div href="/donate">Donate</div>
                <div href="/events">Need</div>
                 <div href="/events">How to Use</div>
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
