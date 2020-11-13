import React, { useState } from "react";

export default () => {
  const [nameorganisation, setNameOrganisation] = useState("");
  const [adressorganisation, setAdressOrgainsation] = useState("");
  const [license, setLicense] = useState("");
  const [typeorganisation, settypeOrganisation] = useState("");
  const [describe, setDescribe] = useState("");
  const [numbervolun, setNumberVolun] = useState("");
  const [help, setHelp] = useState("");
  const [numberpeople, setNumberpeople] = useState("");

  return (
    <div>
      <div className="row row1">
        <div className="six columns">
          <label>Name of organisation</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            onChange={(e) => setNameOrganisation(e.target.value)}
            value={nameorganisation}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Address of the organisation</label>
          <input
            className="u-full-width"
            placeholder="Address"
            type="tel"
            onChange={(e) => setAdressOrgainsation(e.target.value)}
            value={adressorganisation}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Licence number(if any)</label>
          <input
            className="u-full-width required"
            placeholder="23456789"
            type="tel"
            onChange={(e) => setLicense(e.target.value)}
            value={license}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Type of organisation</label>
          <select
            className="u-full-width required"
            placeholder="no choice"
            onChange={(e) => settypeOrganisation(e.target.value)}
            value={typeorganisation}
            autoFocus
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Describe your Organisation(200 word max)</label>
          <input
            className="u-full-width required"
            type="text"
            onChange={(e) => setDescribe(e.target.value)}
            value={describe}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>No of volunteers in your organisation(approx)</label>
          <input
            className="u-full-width required"
            type="number"
            onChange={(e) => setNumberVolun(e.target.value)}
            value={numbervolun}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>
            Type of people that are being helped by your organisation(approx)
          </label>
          <select
            className="u-full-width required"
            placeholder="no choice"
            onChange={(e) => setHelp(e.target.value)}
            value={help}
            autoFocus
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Type of help organisationis willing to provide</label>
          <input
            className="u-full-width required"
            type="number"
            onChange={(e) => setNumberpeople(e.target.value)}
            value={numberpeople}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
