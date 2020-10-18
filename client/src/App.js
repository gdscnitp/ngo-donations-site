import React from 'react';
import './App.css';
import {Navbar} from "./Navbar"
import {Footer} from './Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <p>
         Welcome to MuckIn!!
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
