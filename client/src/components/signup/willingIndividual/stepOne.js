import React from "react";

export default (props) => {
  // expecting the state management by the WillingIndividualSignup component, since it finally handles the submission; Not using redux here, can be more cleaner in a way then
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
  // const [lastName, setLastName] = useState("");
  return (
    <div>
      <div className="row row1">
        <div className="six columns">
          <label>Name</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            onChange={(e) => { console.log("Change", props.changer); props.changer(); props.setName(e.target.value)}}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Contact</label>
          <input
            className="u-full-width"
            placeholder="Telephone"
            type="tel"
            onChange={(e) => props.setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Email</label>
          <input
            className="u-full-width required"
            placeholder="test@mailbox.com"
            type="email"
            onChange={(e) => props.setEmail(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>password</label>
          <input
            className="u-full-width required"
            placeholder="password"
            type="password"
            onChange={(e) => props.setPassword(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>confirm password</label>
          <input
            className="u-full-width required"
            placeholder="password"
            type="password"
            onChange={(e) => props.setConfirmPassword(e.target.value)}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
