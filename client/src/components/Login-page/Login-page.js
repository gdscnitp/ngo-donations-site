import React, { useState, useRef } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import "./Login-page.css";
import { LoginUser } from "../../services/user_service";
//  import Image from "div2.jpg"

export const Loginpage = () => {
  const [email, setEmail] = useState(""); // we can do without these too, by accessing the value from the refs only at submit
  const [password, setPassword] = useState("");
  const [rememberMe, toggleRemember] = useState(false);

  let emailField = useRef(null);
  let passField = useRef(null);
  let rememberCheckBox = useRef(null);

  async function submitHandler(event) {
    await LoginUser( emailField, passField, rememberCheckBox )
                  .then((data) => {
                    const { token } = data; // later if refresh tokens implemented, add it in destructure

                    localStorage.setItem('token', token);

                    // @todo -> Maybe store in the store, that the user is logged in, so we don't need to show the login button anymore
                    Promise.resolve();
                  })
                  .catch((err) => alert(err.msg || "Login Failed"));
  }

  return (
    <div className="divmain">
      <div className="flex-container">
        <div id="div1">
          <h3 style={{ color: "rgb(41 3 71)" }}>WELCOME TO</h3>
          <h1 style={{ fontSize: "50px" }}>MuckIn</h1>
          <h4>Sign In</h4>
          <form id="Loginform" onSubmit={submitHandler}>
            <label for="email" style={{ textAlign: "left" }}>
              <AiFillMail className="icon1" />
            </label>
            <input
              type="text"
              ref={emailField}
              placeholder="Enter Email"
              name="email"
              onChange={() => setEmail(emailField.current.value)}
              required
            ></input>
            <br></br>
            <br></br>
            <label for="psw" style={{ textAlign: "left" }}>
              <AiFillLock className="icon1" />
            </label>
            <input
              type="password"
              ref={passField}
              placeholder="Password"
              onChange={() => setPassword(passField.current.value)}
              name="pass"
              required
            ></input>
            <br></br>

            <input 
              type="checkbox" 
              ref={rememberCheckBox}
              onChange={()=>toggleRemember(rememberCheckBox.current.checked)}
              name="remember" 
            />
            <label for="remember" style={{ marginRight: "200px" }}>
              {" "}
              Keep me Signed In
            </label>
            <br></br>

            <br></br>
            <button type="submit" className="btns">
              Sign In
            </button>
          </form>
          <h5>
            <a href=" ">Forgot password?</a>
          </h5>
          <h4 style={{ color: "rgb(106, 128, 143)" }}>
            Don't have an account? <a href=" ">Sign Up Now</a>
          </h4>

          <hr className="hrline"></hr>

          <h4 style={{ color: "rgb(106, 128, 143)" }}>Or login using</h4>
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
        <div id="div2">
          {/* <p className="img_div"></p> */}
          {/* <img src={} alt="img" id="img_div"></img> */}
        </div>
      </div>
    </div>
  );
};
