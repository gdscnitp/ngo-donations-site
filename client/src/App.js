import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Donation from '../src/components/donation_and_need_form/donation-form.js';
import Need from '../src/components/donation_and_need_form/need-form.js';


function App() {
  return (
    
      <div>
    
      <Donation />
      <Need />
    
    
      </div>
      
  );
}
export default App;

