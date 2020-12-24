import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
// import Carousel from "./components/carousel/carousel"
import { Navbar } from "../src/components/Navbar/Navbar";
import { Footer } from "../src/components/Footer/Footer";
import Feedback from "./components/Feed Page/Feedback";
import getSwitchToRoutes from "./routes"

export default function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        {/* <Carousel /> */}

        <a
          href="/donate"
          className="btn btn-info"
          style={{ float: "left", margin: "1rem" }}
        >
          Donate
        </a>
        <a
          href="/need"
          className="btn btn-info"
          style={{ float: "right", margin: "1rem" }}
        >
          Need
        </a>
        <br />
        <br />
        <Navbar />

        <center>
          {getSwitchToRoutes()}
        </center>
        <br />
        <Feedback />
        <Footer />
      </div>
    </Router>
  );
}
