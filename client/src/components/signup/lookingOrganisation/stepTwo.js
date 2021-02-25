import React, { useState } from "react";
import "./verify.css";
function openFormEmail() {
  document.getElementsByClassName("form-popup-email")[0].style.display =
    "block";
}

function closeFormEmail() {
  document.getElementsByClassName("form-popup-email")[0].style.display = "none";
}
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
      <center>
        {" "}
        <button
          type="button"
          onClick={openFormEmail}
          style={{
            background: "#33c3f0",
            borderWidth: "2px",
            color: "6c7a86",
            borderRadius: "1.2em",
            padding: "4px",
            height: "40px",
            width: "50%",
          }}
        >
          Verify your Email
        </button>
      </center>
      <div className="form-popup-email">
        <button className="close-button" onClick={closeFormEmail}>
          Close
        </button>
        <form
          action="../../../../../lookingOrganisationverifyemail"
          className="form-container"
          method="post"
        >
          <form
            action="../../../../../lookingOrganisationverify-email"
            method="post"
          >
            <button
              type="submit"
              className="verify-link"
              onSubmit={openFormEmail}
            >
              Send OTP
            </button>
          </form>
          <input
            className="otp"
            placeholder="Enter OTP"
            type="text"
            name="otp"
          />

          <button type="submit" className="submit-button">
            Verify
          </button>
        </form>
      </div>

      <form action="../../../../../lookingOrganisationStep2" method="post">
        <div className="row row1">
          <div className="six columns">
            <label>Name of organisation</label>
            <input
              className="u-full-width"
              placeholder="Name"
              type="text"
              name="organisation"
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
              name="address"
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
              name="license"
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
              name="typeofOrganisation"
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
              name="describe"
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
              name="volunteers_no"
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
              name="type_of_people"
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
            <label>Type of help organisation is willing to provide</label>
            <input
              className="u-full-width required"
              type="text"
              name="type_of_help"
              onChange={(e) => setNumberpeople(e.target.value)}
              value={numberpeople}
              autoFocus
            />
          </div>
        </div>
        <button
          style={{
            background: "#33c3f0",
            borderWidth: "2px",
            color: "6c7a86",
            borderRadius: "1.2em",
            padding: "4px",
            height: "40px",
            width: "100px",
          }}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};
