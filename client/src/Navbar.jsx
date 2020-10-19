import React from "react";
import c4 from "../src/images/react.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={c4} className="nav-img" alt="Logo" />
        <a className="navbar-brand" href="#top">
          &nbsp;NGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item">
              <a id="search" href="#top" className="nav-link" role="button">
                Search &nbsp;<i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>
            <li className="nav-item">
              <a id="sign-in" href="#top" className="nav-link" role="button">
                Sign in &nbsp;<i class="fa fa-sign-in" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
