import React from "react";
import "./SignupOption.css";

export const SignupOption = () => {
  return (
    <div>
      <form id="msform">
        <span>Already a user? </span>
        <br />
        <span>
          <a href="/login">Sign In </a>
        </span>
        <fieldset>
          <h2 className="fs-title">Willing to help??</h2>
          <h3 className="fs-subtitle">Sign up here</h3>
          <a href="/willingindividualsignupstep1">
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Individual"
            ></input>
          </a>
          <a href="/willingorganisationsignupstep1">
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Organisation"
            />
          </a>
          <h2 className="fs-title">Looking for help??</h2>
          <h3 className="fs-subtitle">Sign up here</h3>
          <a href="/lookingindividualsignupstep1">
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Individual"
            ></input>
          </a>
          <a href="/lookingorganisationsignupstep1">
            <input
              type="button"
              name="next"
              className="next action-button"
              value="Organisation"
            ></input>
          </a>
        </fieldset>
      </form>
    </div>
  );
};
