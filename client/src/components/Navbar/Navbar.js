import React, { useState } from "react";
import { SearchBar } from "../Searchbar/SearchBar";
import "./Navbar.css";
import { SignupPopup } from "../signup/SignupPopup";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_AUTH } from "../../reducers/action_types";
import Dropdown from "react-bootstrap/Dropdown";

export function Navbar() {
  // converted to functiona components to use the useSelector hook instead of storing complete state
  const [addModelShow, setModelShow] = useState(false);

  const userAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
                  {isAlreadyLoggedIn ? (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: CLEAR_AUTH });
                      }}
                    >
                      {"Logout: " + userAuth.user.email}
                    </div>
                  ) : (
                    <>
                      <div onClick={() => setModelShow(true)}><button className="btn btn-warning">Signup/Login</button></div>
                      <SignupPopup show={addModelShow} onHide={ModelClose} />
                    </>
                  )}
                </li>
                <li>
                  <Dropdown className="other-links">
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="otherLinks"
                    >
                      <strong style={{ color: "grey" }}>OTHER LINKS</strong>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      
                      <Dropdown.Item href="/videopopup">
                        How to use
                      </Dropdown.Item>
                      <Dropdown.Item href="/events">Events</Dropdown.Item>
                      <Dropdown.Item href="/about-us">About Us</Dropdown.Item>
                      <Dropdown.Item href="/faq">FAQs</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <a href="/donate">
                    <div>Donate</div>
                  </a>
                </li>

                <li>
                  <a href="/feedback">
                    <div>Feed</div>
                  </a>
                </li>
                <li>
                  <a href="/need">
                    <div>Need</div>
                  </a>
                </li>

                {/* <li>
                  <a href="/faqs">
                    <div>FAQs</div>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
          <div id="mySidebar" class="sidebar">
            <button class="closebtn" onClick={closeNav}>
              ×
            </button>

            {/* <div href="/donate">Donate</div>
            <div href="">Need</div>
            <div href="">How to Use</div>
            <div href="">Events</div>
            <div href="/about-us">About us</div>
            <div href="/faqs">FAQs</div> */}
            <div
              onClick={() => setModelShow(true)}
              style={{ color: "white", cursor: "pointer" }}
            >
              Signup/Login
            </div>
            <SignupPopup show={addModelShow} onHide={ModelClose} />
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
}
