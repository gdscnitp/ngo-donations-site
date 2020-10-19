import React from "react";

const Filter = () => {
  return (
    <>
      <div className="filter col-lg-2 col-sm-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Filter</h5>
            <p className="text-center">
              <a className="card-link" href="#top">
                Upcoming Events
              </a>
            </p>
            <p className="text-center">
              <a className="card-link" href="#top">
                Ongoing Events
              </a>
            </p>
            <p className="text-center">
              <a className="card-link" href="#top">
                Past Events
              </a>
            </p>
            <p>
              <a
                class="nav-link dropdown-toggle text-center"
                href="#top"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Country
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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

        <div className="add-event">
          {" "}
          <button class="btn btn-warning" id="button" href="#top">
            Add Event
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
