import React, { useState } from "react";
import MultiStep from "../react-multistep";
import "../css/skeleton.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

const prevStyle = { background: "#33c3f0", "border-width": "2px" };
const nextStyle = { background: "#33c3f0", "border-width": "2px" };

const WillingIndividualSignup = () => {
    // step 1
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [lastName, setLastName] = useState("");

    // step 2
  const [yourhelp, setYourHelp] = useState("");
  const [address, setAddress] = useState("");
  const [willhelp, setWilhlp] = useState("");
  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");

  function submitHandler() {
    // @todo

    console.log(email, password, name, confirmpassword, lastName, yourhelp, address, willhelp, occupation, experience);
  }

  return (
    <div className="container cnt1" style={{ backgroundColor: "white" }}>
      <MultiStep
        steps={[
          { component: ()=><StepOne setEmail={setEmail} setPassword={setPassword} setName={setName} setConfirmPassword={setConfirmPassword} setLastName={setLastName} /> },
          { component: ()=><StepTwo setYourHelp={setYourHelp} setAddress={setAddress} setWilhlp={setWilhlp} setOccupation={setOccupation} setExperience={setExperience}/> },
          { component: ()=><StepThree submitHandler={submitHandler} /> },
        ]}
        prevStyle={prevStyle}
        nextStyle={nextStyle} />
      <div className="container app-footer"></div>
    </div>
  );
}

export default WillingIndividualSignup;
