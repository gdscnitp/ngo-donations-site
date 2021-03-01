import React, {useState} from "react";
import csc from 'country-state-city'
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../../node_modules/jquery/dist/jquery.slim.min.js";
import "../../../node_modules/popper.js/dist/umd/popper.min.js";


const Filter =  () => {
    
    var countries = csc.getAllCountries();

    var id , stateCode;

    const [listOfStates, updateListOfStates] = useState([]);
    const [listOfCitites, updateListOfCitites] = useState([]);


    const onChange = () => {
      var e = document.getElementById("country");
      id = e.options[e.selectedIndex].value;
      updateListOfStates(csc.getStatesOfCountry(id));      
    }

    const onChangeStates = () => {
      var e = document.getElementById("country");
      id = e.options[e.selectedIndex].value;
      var f = document.getElementById("state");
      stateCode = f.options[f.selectedIndex].value;
      console.log(stateCode)
      updateListOfCitites(csc.getCitiesOfState(id,stateCode));
    }
   
    
    
  return (
    <>
      <div id="countryModal" class="modal fade" role="dialog">
         <div class="modal-dialog modal-lg" role="content">
            <div class="modal-content">
               <div class="modal-header filter_head">
                  <h4 class="modal-title">Choose Your Location </h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
               </div>
               <div class="modal-body filter_body">   
                 <form class="form">
                   <div class="form-group mt-2">
                     <label for="country"><strong>COUNTRY</strong></label>
                     <select class="form-control btn btn-primary mt-0" id="country" onChange={() => onChange()}>
                      
                       {countries ? (countries.map((country) => {
                         return <option value={country.isoCode}>{country.name}</option>
                       })) : ("There is no country in the world!")}

                     </select>
                   </div>
                   <div class="form-group">
                     <label for="state"><strong>STATE</strong></label>
                     <select class="form-control btn btn-primary mt-0" id="state" onChange={() => onChangeStates()} >
                       {listOfStates.length >0 ? (listOfStates.map((state) => {
                         return <option value={state.isoCode}>{state.name}</option>
                       })): (<option>State</option>)}
                     </select>
                   </div>
                   <div class="form-group">
                     <label for="city"><strong>CITY</strong></label>
                     <select class="form-control btn btn-primary mt-0" id="city">
                     {listOfCitites.length >0 ? (listOfCitites.map((city) => {
                         return <option value={city.isoCode}>{city.name}</option>
                       })): (<option>City</option>)}
                     </select>
                   </div>
                   <button class="btn btn-warning">Done</button>
                 </form>
               </div>
            </div>
         </div>
      </div>
      <div className="container col-3 mt-5 fill">
        <div className="row">
          <div className="col-md-12">
            <div className="card filter-card">
              <div className="card-body fil-car">
                <h5 className="card-title text-center filter-title">Filter</h5>
                <p className="filter-event-type text-center">
                  <a className="card-link filter-link" href="#top">
                    Upcoming Events
                  </a>
                </p>
                <p className="filter-event-type text-center">
                  <a className="card-link filter-link" href="#top">
                    Ongoing Events
                  </a>
                </p>
                <p className="filter-event-type text-center">
                  <a className="card-link filter-link" href="#top">
                    Past Events
                  </a>
                </p>
                <p className="btn filter-event-type text-center">
                  <a
                    className="card-link filter-link"
                    data-toggle="modal" 
                    href="#countryModal"
                  >
                    Location
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="add-event-btn">
          <button className="btn btn-warning" id="add-button" href="#top">
            Add Event
          </button>
        </div>
      </div>

    </>
  );
};
export default Filter;
