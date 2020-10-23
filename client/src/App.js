import React from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Donation from '../src/components/donation_and_need_form/donation-form.js';
import Need from '../src/components/donation_and_need_form/need-form.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <p>Welcome to MuckIn!!</p>
      </header>
       <Donation />
      <Need />
      <Footer></Footer>
    </div>
  );
}

export default App;
