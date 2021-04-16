import React from "react";
import MultiStep from "../react-multistep";
import "../css/skeleton.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
];
const step1 = 0;
const step2 = 1;
const step3 = 2;

const prevStyle = { background: "#33c3f0", borderWidth: "2px" };
const nextStyle = { background: "#33c3f0", borderWidth: "2px" };

const LookingOrganisationSignupStep1 = () => (
  <div className="container cnt1" style={{ backgroundColor: "white" }}>
    <MultiStep
      steps={steps}
      prevStyle={prevStyle}
      nextStyle={nextStyle}
      step={step1}
    />
    <div className="container app-footer"></div>
  </div>
);
const LookingOrganisationSignupStep2 = () => (
  <div className="container cnt1" style={{ backgroundColor: "white" }}>
    <MultiStep
      steps={steps}
      prevStyle={prevStyle}
      nextStyle={nextStyle}
      step={step2}
    />
    <div className="container app-footer"></div>
  </div>
);
const LookingOrganisationSignupStep3 = () => (
  <div className="container cnt1" style={{ backgroundColor: "white" }}>
    <MultiStep
      steps={steps}
      prevStyle={prevStyle}
      nextStyle={nextStyle}
      step={step3}
    />
    <div className="container app-footer"></div>
  </div>
);

export {
  LookingOrganisationSignupStep1,
  LookingOrganisationSignupStep2,
  LookingOrganisationSignupStep3,
};

// const LookingOrganisationSignup = () => (
//   <div className="container cnt1" style={{ backgroundColor: "white" }}>
//     <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
//     <div className="container app-footer"></div>
//   </div>
// );

// export default LookingOrganisationSignup;
