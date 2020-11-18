import React, { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div className="row row1">
        <div className="six columns">
          <label>Name</label>
          <input
            className="u-full-width"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
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
            value={email}
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
            value={password}
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
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
