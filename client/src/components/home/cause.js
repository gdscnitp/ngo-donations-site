import React from "react";
import Donate from './donate.svg'
import Volunteer from './volunteer.svg'
import Event from './event.svg'

export default function Cause() {
  return (
    <div>
      <section class="causes_area">
        <div class="row">
          <div class="col-12 main_title">
            <h2>Your small help can bring smiles to many</h2>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-lg-3 col-md-6">
              <div class="single_causes">
                <img
                  src={Donate}
                  alt="abc"
                />
                <h4>Help By Donation</h4>
                <p>
                  It you're. Was called you're fowl grass lesser land together
                  waters beast darkness earth land whose male all moveth
                  fruitful.
                </p>
                <button className="btn btn-success btn-lg m-3">Donate!</button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single_causes">
                <img
                  src={Event}
                  alt="def"
                />
                <h4>Help By Inspiring</h4>
                <p>
                  It you're. Was called you're fowl grass lesser land together
                  waters beast darkness earth land whose male all moveth
                  fruitful.
                </p>
                <br />
                <button className="btn btn-success w-70 btn-lg">Events</button>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single_causes">
                <img
                  src={Volunteer}
                  alt="ghi"
                />
                <h4>Volunteer</h4>
                <p>
                  It you're. Was called you're fowl grass lesser land together
                  waters beast darkness earth land whose male all moveth
                  fruitful.
                </p>
                <button className="btn btn-success btn-lg">Join Event</button>
                <button className="btn btn-success btn-lg m-1">Join Org</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
