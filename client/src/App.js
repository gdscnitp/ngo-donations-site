import React from 'react';
import './App.css';
import {Navbar} from "./Navbar"
import './Navbar.css'
import {Footer} from './Footer'
import './Footer.css';

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
