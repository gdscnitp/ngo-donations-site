import React from "react";

export default (props) => {
  // expecting the state management by the WillingIndividualSignup component, since it finally handles the submission; Not using redux here, can be more cleaner in a way then
  // const [yourhelp, setYourHelp] = useState("");
  // const [address, setAddress] = useState("");
  // const [willhelp, setWilhlp] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [experience, setExperience] = useState("");

  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label>How do you wish to help??</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            onChange={(e) => props.setYourHelp(e.target.value)}
            // value={yourhelp}
            required={true}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Address</label>
          <input
            className="u-full-width"
            placeholder="Address"
            type="text"
            required={true}
            onChange={(e) => props.setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Are you willing to join any Organisation?</label>
          <select
            className="u-full-width required"
            placeholder="no choice"
            onChange={(e) => props.setWilhlp(e.target.value)}
            required={true}
            autoFocus
          >
            <option value="opel">YES</option>
            <option value="audi">NO</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Occupation</label>
          <input
            className="u-full-width required"
            type="text"
            onChange={(e) => props.setOccupation(e.target.value)}
            required={true}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>previous experience(if any)</label>
          <input
            className="u-full-width required"
            type="text"
            onChange={(e) => props.setExperience(e.target.value)}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
