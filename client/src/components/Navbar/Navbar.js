import React, { Component } from "react";
import { SearchBar } from "../Searchbar/SearchBar";
import "./Navbar.css";
import { SignupPopup } from "../signup/SignupPopup";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { addModelShow: false };
  }
  openNav() {
    document.getElementById("mySidebar").style.width = "300px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  render() {
    let addModelClose = () => this.setState({ addModelShow: false });
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
                    <a onClick={() => this.setState({ addModelShow: true })}>
                      Signup/Login
                    </a>
                    <SignupPopup
                      show={this.state.addModelShow}
                      onHide={addModelClose}
                    />
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
              <button class="closebtn" onClick={this.closeNav}>
                ×
              </button>
              <a href="/events">Events</a>
              <a href="/aboutus">About us</a>
              <a href="/faqs">FAQs</a>
              <a
                onClick={() => this.setState({ addModelShow: true })}
                style={{ color: "white", cursor: "pointer" }}
              >
                Signup/Login
              </a>
              <SignupPopup
                show={this.state.addModelShow}
                onHide={addModelClose}
              />
            </div>
            <div class="menu__wrapper col-md-12 d-lg-none">
              <button
                type="button"
                class="menu__mobile-button"
                onClick={this.openNav}
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
}
