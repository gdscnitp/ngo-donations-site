import React, { useState } from "react";

export default () => {
  const [yourhelp, setYourHelp] = useState("");
  const [address, setAddress] = useState("");
  const [willhelp, setWilhlp] = useState("");
  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label>How do you wish to help??</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            onChange={(e) => setYourHelp(e.target.value)}
            value={yourhelp}
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
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Are you willing to join any Organisation?</label>
          <select
            className="u-full-width required"
            placeholder="no choice"
            onChange={(e) => setWilhlp(e.target.value)}
            value={willhelp}
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
            onChange={(e) => setOccupation(e.target.value)}
            value={occupation}
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
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
