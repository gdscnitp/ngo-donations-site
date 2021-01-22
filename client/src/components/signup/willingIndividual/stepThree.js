import React from "react";

export default () => {
  return (
    <div>
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
              required={true}
              autoFocus
            />
            <span> Accept </span>{" "}
          </label>
        </div>
      </div>
    </div>
  );
};
