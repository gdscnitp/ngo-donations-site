import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
// import Carousel from "./components/carousel/carousel"
import { Navbar } from "../src/components/Navbar/Navbar";
import { Footer } from "../src/components/Footer/Footer";
import Donation from "../src/components/donation_and_need_form/donation-form.js";
import Need from "../src/components/donation_and_need_form/need-form.js";
import MyBook from "./components/home/book";
import Stories from "./components/home/stories";
import User from "./components/User-profile/User.js";
import { Loginpage } from "./components/Login-page/Login-page";
import Homepage from "./pages/Homepage";
import Event from "./components/Event/Event.js";
import Events from "./components/Event Page/Events";
import {
  LookingIndividualSignupStep1,
  LookingIndividualSignupStep2,
  LookingIndividualSignupStep3,
} from "./components/signup/lookingIndividual/lookingIndividualSignup";
import {
  LookingOrganisationSignupStep1,
  LookingOrganisationSignupStep2,
  LookingOrganisationSignupStep3,
} from "./components/signup/lookingOrganisation/lookingOrganisationSignup";
import {
  WillingIndividualSignupStep1,
  WillingIndividualSignupStep2,
  WillingIndividualSignupStep3,
} from "./components/signup/willingIndividual/willingIndividualSignup";
import {
  WillingOrganisationSignupStep1,
  WillingOrganisationSignupStep2,
  WillingOrganisationSignupStep3,
} from "./components/signup/willingOrganisation/willingOrganisationSignup";
import Feedback from "./components/Feed Page/Feedback";
import { Videopopup } from "./components/Video-popup/Video-popup";
import Faq from "./components/Faq-page/Faq.js";
//import MultiStep from './components/signup/react-multistep';
export default function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        {/* <Carousel /> */}
        <br />
        <Navbar />
        <br />
        <center>
          <Switch>
            <Route path="/createevent" component={Event} />
            <Route path="/" exact component={Homepage} />
            <Route path="/aboutus" component={MyBook} />
            <Route path="/faqs" component={Stories} />
            <Route path="/signup" component={Homepage} />
            <Route path="/login" component={Loginpage} />
            <Route path="/donate" component={Donation} />
            <Route path="/need" component={Need} />
            <Route path="/userprofile" component={User} />
            <Route path="/events" component={Events} />
            <Route path="/videopopup" component={Videopopup} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/faq" component={Faq} />
            {/* <Route
              path="/lookingindividualsignup"
              component={LookingIndividualSignup}
            /> */}
            {/* <Route
              path="/lookingorganisationsignup"
              component={LookingOrganisationSignup}
            /> */}
            {/* <Route
              path="/willingindividualsignup"
              component={WillingIndividualSignup}
            /> */}
            <Route
              path="/willingorganisationsignupstep1"
              component={WillingOrganisationSignupStep1}
            />
            <Route
              path="/willingorganisationsignupstep2"
              component={WillingOrganisationSignupStep2}
            />
            <Route
              path="/willingorganisationsignupstep3"
              component={WillingOrganisationSignupStep3}
            />
            <Route
              path="/willingindividualsignupstep1"
              component={WillingIndividualSignupStep1}
            />
            <Route
              path="/willingindividualsignupstep2"
              component={WillingIndividualSignupStep2}
            />
            <Route
              path="/willingindividualsignupstep3"
              component={WillingIndividualSignupStep3}
            />
            <Route
              path="/lookingindividualsignupstep1"
              component={LookingIndividualSignupStep1}
            />
            <Route
              path="/lookingindividualsignupstep2"
              component={LookingIndividualSignupStep2}
            />
            <Route
              path="/lookingindividualsignupstep3"
              component={LookingIndividualSignupStep3}
            />
            <Route
              path="/lookingorganisationsignupstep1"
              component={LookingOrganisationSignupStep1}
            />
            <Route
              path="/lookingorganisationsignupstep2"
              component={LookingOrganisationSignupStep2}
            />
            <Route
              path="/lookingorganisationsignupstep3"
              component={LookingOrganisationSignupStep3}
            />
          </Switch>
        </center>

        <br />
        <Footer />
      </div>
    </Router>
  );
}
