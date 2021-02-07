import React from "react";
import './verify.css'
function openFormEmail() {
    document.getElementsByClassName("form-popup-email")[0].style.display = "block";
}

function closeFormEmail() {
    document.getElementsByClassName("form-popup-email")[0].style.display = "none";
}

export default (props) => {
  // expecting the state management by the WillingIndividualSignup component, since it finally handles the submission; Not using redux here, can be more cleaner in a way then
  // const [yourhelp, setYourHelp] = useState("");
  // const [address, setAddress] = useState("");
  // const [willhelp, setWilhlp] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [experience, setExperience] = useState("");

  return (
    <div>
      <center>  <button type='button' onClick={openFormEmail}
                style={{ background: "#33c3f0", borderWidth: "2px", color: "6c7a86", borderRadius: "1.2em", padding: "4px", height: "40px", width: "50%" }}>Verify your Email</button>
            </center>
            <div className="form-popup-email" >
                <button className="close-button" onClick={closeFormEmail} >Close</button>
                <form action="../../../../../willingIndividualverifyemail" className="form-container" method="post">
                    <form action="../../../../../willingIndividualverify-email" method="post">
                        <button type="submit" className="verify-link" onSubmit={openFormEmail}>Send OTP</button>
                    </form>
                    <input
                        className="otp"
                        placeholder="Enter OTP"
                        type="text"
                        name="otp"
                    />



                    <button type="submit" className='submit-button'>Verify</button>

                </form>
            </div>




       <form action="../../../../../willingIndividualStep2" method="post">
      <div className="row">
        <div className="six columns">
          <label>How do you wish to help??</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            name="how_to_help"
            // onChange={(e) => props.setYourHelp(e.target.value)}
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
            name="address"
            required={true}
            // onChange={(e) => props.setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Are you willing to join any Organisation?</label>
          <select
            className="u-full-width required"
            placeholder="no choice"
            name="willJoinOrgnaisation"
            // onChange={(e) => props.setWilhlp(e.target.value)}
            //required={true}
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
            name="occupation"
            // onChange={(e) => props.setOccupation(e.target.value)}
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
            name="prev_exp"
            // onChange={(e) => props.setExperience(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <button style={{ background: "#33c3f0", borderWidth: "2px", color: "6c7a86", borderRadius: "1.2em", padding: "4px",height:"40px",width:"100px"}}   type="submit" >Save</button>
    </form>
    </div>
  );
};
