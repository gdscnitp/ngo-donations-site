import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import './App.css';
import Navbar from "./Navbar";
import Filter from "./Filter";
import Home from "./Home";
import Boots from "./Boots";

function Events() {
  return (
    
      <div>
      <Navbar />
      <Home />
      <Filter />
      <Boots />
      </div>
    
      
  )
}

export default Events;

