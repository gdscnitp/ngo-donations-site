import React from 'react';
import './App.css';
import MyBook from './components/book'
import Rating from './components/Rating';
import Cause from './components/cause'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to MuckIn!!
        </p>
        </header>
        <br />
        <br />
        <center>
          <Cause />
          <MyBook />
          <Rating />
        </center>
    </div>
  );
}

export default App;
