import React from "react";
import MultiStep from "../react-multistep";
import "../css/skeleton.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import {} from "../../../services/user_service";

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
];

const prevStyle = { background: "#33c3f0", "borderWidth": "2px" };
const nextStyle = { background: "#33c3f0", "borderWidth": "2px" };

const LookingIndividualSignup = () => (
  <div className="container cnt1" style={{ backgroundColor: "white" }}>
    <MultiStep
      steps={steps} 
      showNavigation={true}
      prevStyle={prevStyle}
      nextStyle={nextStyle} />
    <div className="container app-footer"></div>
  </div>
);

export default LookingIndividualSignup;
