import React from "react";

export default (props) => {
  const {setEmail, setPassword, setName, setContact} = props;

  return (
    <div>
      <div className="row row1">
        <div className="six columns">
          <label>Name</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            onChange={(e) => {setName(e.target.value)}}
            required
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
            required
            onChange={(e) => setContact(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            required
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
            onChange={(e) => setPassword(e.target.value)}
            required
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
            // @note @adi - No way to actually check if password matches, before user clicks SUBMIT, instead of checking it after steps, we should rather change the way the steps are shown, so we have better control
            // onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
