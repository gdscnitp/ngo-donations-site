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
  const [yourproblem, setProblem] = useState("");
  const [adress, setAdress] = useState("");
  const [willhelp, setWilhlp] = useState("");
  const [occupation, setOccupation] = useState("");
  const [lookinghelp, setLookinghelp] = useState("");

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
          action="../../../../../lookingIndividualverifyemail"
          className="form-container"
          method="post"
        >
          <form
            action="../../../../../lookingIndividualverify-email"
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

      <form method="post" action="../../../../../lookingIndividualStep2">
        <div className="row">
          <div className="six columns">
            <label>Describe your problem</label>
            <input
              className="u-full-width"
              placeholder="Name"
              type="text"
              name="describe"
              onChange={(e) => setProblem(e.target.value)}
              value={yourproblem}
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>What kind of help you are looking for?</label>
            <input
              className="u-full-width"
              placeholder="Address"
              type="text"
              name="typeofHelp"
              onChange={(e) => setLookinghelp(e.target.value)}
              value={lookinghelp}
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Address</label>
            <input
              className="u-full-width required"
              type="text"
              name="address"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Occupation</label>
            <input
              className="u-full-width required"
              type="text"
              name="occupation"
              onChange={(e) => setOccupation(e.target.value)}
              value={occupation}
              autoFocus
            />
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <label>Are you willing to join any Organisation?</label>
            <select
              className="u-full-width required"
              placeholder="no choice"
              name="willJoinOrganisation"
              onChange={(e) => setWilhlp(e.target.value)}
              value={willhelp}
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
  );
};
