import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Footer } from "../src/components/Footer/Footer";
import Donation from "../src/components/donation_and_need_form/donation-form.js";
import Need from "../src/components/donation_and_need_form/need-form.js";
import MyBook from "./components/home/book";
import Rating from "./components/home/Rating";
import Cause from "./components/home/cause";
import Stories from "./components/home/stories";
import News from "./components/home/news";
import {Loginpage} from "./components/Login-page/Login-page";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <p>Welcome to MuckIn!!</p>
      </header>
      <center>
        <Stories />
        <h3>
          <strong>Why Should I Care?</strong>
        </h3>
        <News />
        <br/>    
        <Cause />
        <br/>
        <h3>
          <strong>About Us BOOK!</strong>
        </h3>
        <MyBook />
        <Rating />
      </center>
      <Donation />
      <Loginpage />
      <Need />
      <Footer />
    </div>
  );
}

export default App;
