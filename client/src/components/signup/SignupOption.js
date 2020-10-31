import React from "react";
import { Link } from 'react-router';
import "./SignupOption.css";

export const SignupOption = () => {
  return(
<div>
<form id="msform">
<span>Are you Already a user?? </span>
  <p>Click here to sign in</p>
  <fieldset>
    <h2 class="fs-title">Willing to help??</h2>
    <h3 class="fs-subtitle">Sign up here</h3>
	<input type="button" name="next" class="next action-button" value="Individual" />
    <input type="button" name="next" class="next action-button" value="Organisation" />
	<h2 class="fs-title">Looking for help??</h2>
    <h3 class="fs-subtitle">Sign up here</h3>
	<input type="button" name="next" class="next action-button" value="Individual"></input>
    <input type="button" name="next" class="next action-button" value="Organisation"></input>
  </fieldset>
  
</form>
</div>
  );
};
