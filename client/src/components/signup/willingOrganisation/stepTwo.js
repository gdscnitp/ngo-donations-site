import React, { useState } from "react";
import "./verify.css";
function openFormEmail() {
  document.getElementsByClassName("form-popup-email")[0].style.display =
    "block";
}

function closeFormEmail() {
  document.getElementsByClassName("form-popup-email")[0].style.display = "none";
}

function openFormPhone() {
  document.getElementsByClassName("form-popup-phone")[0].style.display =
    "block";
}

function closeFormPhone() {
  document.getElementsByClassName("form-popup-phone")[0].style.display = "none";
}

export default () => {
  const [nameorganisation, setNameOrganisation] = useState("");
  const [adressorganisation, setAdressOrgainsation] = useState("");
  const [license, setLicense] = useState("");
  const [typeorganisation, settypeOrganisation] = useState("");
  const [describe, setDescribe] = useState("");
  const [numbervolun, setNumberVolun] = useState("");
  const [help, setHelp] = useState("");
  const [isopen, setOpen] = useState("");

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
      <center>
        <button
          type="button"
          onClick={openFormPhone}
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
          Verify your Contact Number
        </button>
      </center>

      <div className="form-popup-email">
        <button className="close-button" onClick={closeFormEmail}>
          Close
        </button>
        <form
          action="../../../../../verifyemail"
          className="form-container"
          method="post"
        >
          <form action="../../../../../verify-email" method="post">
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
      <div className="form-popup-phone">
        <button className="close-button" onClick={closeFormPhone}>
          Close
        </button>
        <form action="../../../../../verifyphone" className="form-container">
          <form action="../../../../../verify-phone" method="post">
            <button type="submit" className="verify-link">
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

      <div>
        <form action="../../../../../org" method="post">
          <div className="row row1">
            <div className="six columns">
              <label>Name of organisation</label>
              <input
                className="u-full-width"
                placeholder="Name"
                type="text"
                name="nameorganisation"
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
                name="addressorganisation"
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
                name="typeorganisation"
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
                name="numbervolun"
                onChange={(e) => setNumberVolun(e.target.value)}
                value={numbervolun}
                autoFocus
              />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label>Type of help organisationis willing to provide</label>
              <select
                className="u-full-width required"
                placeholder="no choice"
                onChange={(e) => setHelp(e.target.value)}
                value={help}
                name="help"
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
              <select
                className="u-full-width required"
                placeholder="no choice"
                onChange={(e) => setOpen(e.target.value)}
                value={isopen}
                name="isopen"
                autoFocus
              >
                <option value="opel">YES</option>
                <option value="audi">NO</option>
              </select>
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
    </div>
  );
};
