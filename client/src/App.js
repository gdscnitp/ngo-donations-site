import React from 'react';
import './App.css';
import MyBook from './components/home/book'
import Rating from './components/home/Rating';
import Cause from './components/home/cause'
import Stories from './components/home/stories'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <p>
         Welcome to MuckIn!!
        </p>
        </header>
        <br />
        <br />
        <center>
          <h3><strong>Top Stories!</strong></h3>
          <br />
          <br />
          
         <Stories />
          <br />
          <br />
          <Cause />
          <h3><strong>About Us BOOK!</strong></h3>
          <MyBook />
          <br/>
          <br/>
          <h3>What Do People Say?</h3>
          <br/>
          <Rating />
        </center>
        <br />
        <br />
        <br />
        <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
