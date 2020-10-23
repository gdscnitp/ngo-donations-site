import React from "react";

const Filter = () => {
  return (
    <>
      <div className="container col-3 mt-5" className="fill">
        <div className="row">
          <div className="col-md-12">
            <div class="card filter-card">
              <div class="card-body">
                <h5 class="card-title text-center filter-title">Filter</h5>
                <p className="filter-event-type text-center">
                  <a className="card-link" href="#top">
                    Upcoming Events
                  </a>
                </p>
                <p className="filter-event-type text-center">
                  <a className="card-link" href="#top">
                    Ongoing Events
                  </a>
                </p>
                <p className="filter-event-type text-center">
                  <a className="card-link" href="#top">
                    Past Events
                  </a>
                </p>
                <p>
                  <a
                    class="nav-link dropdown-toggle filter-event-type text-center"
                    href="#top"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#top">
                      USA
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="add-event-btn">
          <button class="btn btn-warning" id="add-button" href="#top">
            Add Event
          </button>
        </div>
      </div>
    </>
  );
};
export default Filter;
