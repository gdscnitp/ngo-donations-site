import React from 'react';
import './App.css';
import MyBook from './components/book'
import Rating from './components/Rating';
import Cause from './components/cause'
import Stories from './components/stories'


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
    </div>
  );
}

export default App;
