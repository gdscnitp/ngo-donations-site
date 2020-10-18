import React from 'react';

const Filter = () => {
    return(
        <>
        <div class="filter col-md-2">
       <div class="card">
  <div class="card-body">
    <h5 class="card-title text-center">Filter</h5>
    <p className="text-center"><a className="card-link" href="#">Upcoming Events</a></p>
    <p className="text-center"><a className="card-link" href="#">Ongoing Events</a></p>
    <p className="text-center"><a className="card-link" href="#">Past Events</a></p>
    <p><a class="nav-link dropdown-toggle text-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Country
        </a>
    </p>
  </div>
</div>
    
      <button class="btn btn-warning" id="button" href="#">Add Event</button>
    </div>


        </>
    )
}

export default Filter; 