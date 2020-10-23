import React from "react";
import Donate from './donate.svg'
import Volunteer from './volunteer.svg'
import Event from './event.svg'
import Card from './cards'

export default function Cause() {
  return (
   <div>
      <section class="causes_area">
        <div class="">
          <div class="col-12 main_title">
            <h3>Your small help can bring smiles to many</h3>
          </div>
          <div class="row d-flex justify-content-center cards-container">
            <Card img={Donate} id="0" />
            <Card img={Event} id="1" />
            <Card img={Volunteer} id="2" />
          </div>
        </div>
      </section>
    </div> 
  );
}
