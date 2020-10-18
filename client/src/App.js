import React from "react";
import "./App.css";
import {Navbar} from './Navbar';
import {Footer} from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <p>Welcome to MuckIn!!</p>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
