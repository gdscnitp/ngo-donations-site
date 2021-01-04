import React from "react";
import { Route, Switch } from "react-router-dom";

import Donation from "../src/components/donation_and_need_form/donation-form.js";
import Need from "../src/components/donation_and_need_form/need-form.js";
import MyBook from "./components/home/book";
import Stories from "./components/home/stories";
import User from "./components/User-profile/User.js";
import Event from "./components/Event/Event";
import HomePage from "./pages/Homepage"
import Events from "./components/Event Page/Events";
import { Loginpage } from "./components/Login-page/Login-page";
import LookingIndividualSignup from "./components/signup/lookingIndividual/lookingIndividualSignup";
import LookingOrganisationSignup from "./components/signup/lookingOrganisation/lookingOrganisationSignup";
import WillingIndividualSignup from "./components/signup/willingIndividual/willingIndividualSignup";
import WillingOrganisationSignup from "./components/signup/willingOrganisation/willingOrganisationSignup";
import Feedback from "./components/Feed Page/Feedback";
import {Videopopup } from './components/Video-popup/Video-popup';

/**
 * @learnt -> The history and match arguments are passed to the component you want to be rendered `by the Route component` itself
 */
const routes = [
  {
    path: '/',
    exact: true,
    component: ({history, match}) => <HomePage history={history} match={match} />
  },
  {
    path: '/createEvent',
    exact: false,
    component: () => <Event />,
  },
  {
    path: '/about-us',
    exact: false,
    component: () => <MyBook />,
  },
  {
    path: '/faqs',
    exact: false,
    component: Stories,
  },
  {
    path: '/donate',
    exact: false,
    component: Donation,
  },
  {
    path: '/need',
    exact: false,
    component: Need,
  },
  {
    path: '/user/profile',
    exact: false,
    component: ({history, match}) => <User history={history} match={match} />,
  },
  {
    path: '/events',
    exact: false,
    component: Events,
  },
  {
    path: '/videopopup',
    component: Videopopup
  },
  {
    path: '/feedback',
    component: Feedback
  },
  {
    path: '/login',
    exact: false,
    component: Loginpage
  },
  {
    path: '/looking/signup',
    exact: true,
    component: LookingIndividualSignup,
  },
  {
    path: '/looking/org/signup',
    exact: true,
    component: LookingOrganisationSignup,
  },
  {
    path: '/willing/signup',
    exact: true,
    component: WillingIndividualSignup,
  },
  {
    path: '/willing/org/signup',
    exact: true,
    component: WillingOrganisationSignup,
  }
];

export default function getSwitchToRoutes() {
  return (
    <Switch>
      {routes.map(
        (route, index) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={index}
          />
        )
      )}
    </Switch>
  )
}
