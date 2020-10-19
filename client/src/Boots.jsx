import React from "react";
import c1 from "../src/images/1.jpg";
import c2 from "../src/images/2.jpg";
import c3 from "../src/images/3.jpg";

const Boots = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div>
            <div>
              <h1 className="evt">Find an Event</h1>
            </div>
            <div class="active-cyan-4 mt-4 col-md-11 col-10">
              <input
                class="form-control"
                type="text"
                placeholder="Search an Event"
                aria-label="Search"
              />
            </div>

            <div id="bottom" className="row">
              <div>
                <div className="event-card">
                  <div className="card">
                    <img src={c1} className="card-img-top" alt="Prathma" />
                    <div className="card-body">
                      <h2>Prathma</h2>
                      <div className="mb-1 text-muted">
                        October 30, 2020, 12:00 PM
                      </div>
                      <div>
                        <button className="btn btn-primary" href="#top">
                          Know More!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="event-card">
                  <div className="card">
                    <img
                      src={c2}
                      className="card-img-top"
                      alt="Girl's Education"
                    />
                    <div className="card-body">
                      <h2>Girl's Education</h2>
                      <div className="mb-1 text-muted">
                        October 24, 2020, 06:30 PM
                      </div>
                      <div>
                        <button className="btn btn-primary" href="#top">
                          Know More!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="event-card">
                  <div className="card">
                    <img src={c3} className="card-img-top" alt="Lend a Hand" />
                    <div className="card-body">
                      <h2>Lend a Hand</h2>
                      <div className="mb-1 text-muted">
                        November 01, 2020, 06:30 PM
                      </div>
                      <div>
                        <button className="btn btn-primary" href="#top">
                          Know More!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boots;
