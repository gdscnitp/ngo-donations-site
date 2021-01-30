import React from "react";

const Filter = () => {
  return (
    <>
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
                <p>
                  <a
                    className="nav-link dropdown-toggle filter-event-type text-center"
                    href="#top"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#top">
                      USA
                    </a>
                    <a className="dropdown-item" href="#top">
                      India
                    </a>
                    <a className="dropdown-item" href="#top">
                      Sri Lanka
                    </a>
                  </div>
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
