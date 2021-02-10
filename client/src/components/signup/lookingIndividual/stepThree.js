import React, { useState } from "react";

export default () => {
  const [checked, setChecked] = useState("");

  return (
    <div>
      <form method='post' action='../../../../../lookingIndividualStep3'>
      <div className="row">
        <div className="ten columns terms">
          <span>By clicking "Accept" I agree that:</span>
          <ul className="docs-terms">
            <li>I have read and accepted the User Agreement</li>
            <li>I have read and accepted the Privacy Policy</li>
            <li>I am at least 18 years old</li>
          </ul>
          <label>
            <input
              type="checkbox"
              //   defaultChecked={this.state.checked}
              checked={checked}
              onChange={(e) => setChecked(e.target.value)}
              required
              autoFocus
            />
            <span> Accept </span>{" "}
          </label>
        </div>
      </div>
      <button style={{ background: "#33c3f0", borderWidth: "2px", color: "6c7a86", borderRadius: "1.2em", padding: "4px",height:"40px",width:"100px"}}   type="submit" >Submit</button>
    </form>
    </div>
  );
};
