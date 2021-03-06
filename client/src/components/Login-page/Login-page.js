import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // only using to have all components easy access to check if user logged in or not
import { useHistory } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./Login-page.css";
import { LoginUser } from "../../services/user_service";
import { STORE_AUTH } from "../../reducers/action_types";
//  import Image from "div2.jpg"

//Added for form validation
import validator from "validator";

export const Loginpage = () => {
  const [email, setEmail] = useState(""); // we can do without these too, by accessing the value from the refs only at submit
  const [password, setPassword] = useState("");
  const [rememberMe, toggleRemember] = useState(false);

  const history = useHistory(); // using to redirect user after login
  const dispatch = useDispatch(); // only to store in redux store, so that can check from any component whether logged in or not
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const auth = useSelector((state) => state.auth);

  //Added for form validation
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [isStrong, setStrong] = useState(false);
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  //password validation
  const validatePass = (e) => {
    var password = e.target.value;

    if (validator.isStrongPassword(password)) {
      setPassError("Strong password");
      setStrong(true);
    } else {
      setPassError("Weak Password");
    }
  };

  async function submitHandler(event) {
    event.preventDefault();

    if (isLoggedIn) {
      // if already logged in, then redirect
      alert("You are already logged in :D");

      history.push("/"); // redirecting to homepage
      window.location.reload();
    }
    await LoginUser(email, password)
      .then((data) => {
        const { user } = data; // later if refresh tokens implemented, add it in destructure

        // by default uses sessionStorage, if rememberMe is true we use localStorage
        rememberMe
          ? localStorage.setItem("user", JSON.stringify(user))
          : sessionStorage.setItem("user", JSON.stringify(user));

        // [DONE] @todo -> Maybe store in the store, that the user is logged in, so we don't need to show the login button anymore
        dispatch({ type: STORE_AUTH, payload: user });
        console.log("Login Successful...", user);
        console.debug(
          "Now other components can check if user logged in through state.auth.isLoggedIn",
          user
        );
        console.debug("User object in redux state is: ", auth);

        alert("[REMOVE FROM PROD] Namaste ! Login Successful :D");
        // redirecting to homepage
        history.push("/");
        window.location.reload();

        Promise.resolve();
      })
      .catch((err) => {
        alert(err.msg || "Login Failed... Please try again");

        console.log(err);
      });
  }

  return (
    <div className="divmain">
      <div className="flex-container">
        <div className="left-form-container">
          <h3 style={{ color: "rgb(41 3 71)" }}>WELCOME TO</h3>
          <h1 style={{ fontSize: "50px" }}>MuckIn</h1>
          <h4>Sign In</h4>
          <form id="Loginform" onSubmit={submitHandler}>
            {/* login field */}
            <label for="email" style={{ textAlign: "left" }}>
              <AiFillMail className="icon1" />
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={
                ((e) => setEmail(e.target.value), (e) => validateEmail(e))
              }
              required
            ></input>
            <br />
            <span
              style={{
                marginTop: "0",
                marginLeft: "2px",
                fontWeight: "bold",
                color: "red",
                fontSize: "11px",
              }}
            >
              {emailError}
            </span>
            <br></br>
            <br></br>

            <label for="psw" style={{ textAlign: "left" }}>
              <AiFillLock className="icon1" />
            </label>
            <input
              type="password"
              placeholder="Password"
              onChange={
                ((e) => setPassword(e.target.value), (e) => validatePass(e))
              }
              name="pass"
              required
            ></input>
            <br />
            <span
              style={{
                color: isStrong ? "green" : "red",
                marginTop: "0",
                marginLeft: "2px",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              {passError}
            </span>
            <br></br>
            <div style={{ textAlign: "center" }}>
              <input
                type="checkbox"
                onChange={(e) => toggleRemember(e.target.checked)}
                name="remember"
              />
              <label for="remember" style={{ color: "	 #595959" }}>
                {" "}
                Keep me Signed In
              </label>
            </div>

            <button type="submit" className="btns">
              Sign In
            </button>
          </form>
          <h5>
            <a href=" " className="Ask-Account">
              Forgot password?
            </a>
          </h5>
          <h4 style={{ color: "rgb(106, 128, 143)" }} className="Ask-Account">
            Don't have an account? <a href=" ">Sign Up Now</a>
          </h4>

          <hr className="hrline"></hr>

          <h4 style={{ color: "rgb(106, 128, 143)" }} className="Ask-Account">
            Or login using
          </h4>
          <table className="tableLogin">
            <tr>
              <a href=" ">
                <AiFillFacebook className="icon2" />
              </a>
              <a href=" ">
                <AiFillGoogleCircle className="icon2" />
              </a>
            </tr>
          </table>
        </div>

        <div className="right-form-container">
          {/* <p className="img_div"></p> */}
          {/* <img src={} alt="img" id="img_div"></img> */}
        </div>
      </div>
    </div>
  );
};
