import React from "react";
import "./SignupOption.css";

export const SignupOption = () => {
  return (
    <div>
      <form id="msform">
        <span>Are you Already a user?? </span>
        <br />
        <a href="/">Click here </a>
        <span>to sign in</span>
        <fieldset>
          <h2 class="fs-title">Willing to help??</h2>
          <h3 class="fs-subtitle">Sign up here</h3>
          <a href="/willing/signup">
            <input
              type="button"
              name="next"
              class="next action-button"
              value="Individual"
            ></input>
          </a>
          <a href="/willing/org/signup">
            <input
              type="button"
              name="next"
              class="next action-button"
              value="Organisation"
            />
          </a>
          <h2 class="fs-title">Looking for help??</h2>
          <h3 class="fs-subtitle">Sign up here</h3>
          <a href="/looking/signup">
            <input
              type="button"
              name="next"
              class="next action-button"
              value="Individual"
            ></input>
          </a>
          <a href="/looking/org/signup">
            <input
              type="button"
              name="next"
              class="next action-button"
              value="Organisation"
            ></input>
          </a>
        </fieldset>
      </form>
    </div>
  );
};
