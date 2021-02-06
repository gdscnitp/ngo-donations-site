import React from "react";

export default (props) => {
  const {setEmail, setPassword, setName, setContact} = props;

  return (
    <div>
      <form action="../../../../../willingIndividualStep1" method="post">
      <div className="row row1">
        <div className="six columns">
          <label>Name</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            name="name"
            // onChange={(e) => {setName(e.target.value)}}
            required={true}
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
            name="contact"
            required={true}
            // onChange={(e) => setContact(e.target.value)}
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
            name="email"
            // onChange={(e) => setEmail(e.target.value)}
            required={true}
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
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
            required={true}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Confirm Password</label>
          <input
            className="u-full-width required"
            placeholder="password"
            type="password"
            name="confirmPassword"
            // @note @adi - No way to actually check if password matches, before user clicks SUBMIT, instead of checking it after steps, we should rather change the way the steps are shown, so we have better control
            // onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
            autoFocus
          />
        </div>
      </div>
      <button style={{ background: "#33c3f0", borderWidth: "2px", color: "6c7a86", borderRadius: "1.2em", padding: "4px",height:"40px",width:"100px"}}   type="submit" >Save</button>
    </form>
    </div>
  );
};
