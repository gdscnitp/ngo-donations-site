import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div class="footer">
      <link
        rel="stylesheet"
        href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      ></link>
      <div class="sas2">
      <div class="sas2-1">
         <ul class="cities1">
          <li><strong>Cities we serve</strong></li>
          <li>lorem</li>
          <li>lorem</li>
               <li>lorem</li>
               <li>lorem</li>
          </ul>
    </div>
          <div class="sas2-2">
         <ul class="cities1">
          <li><strong>Cities we serve</strong></li>
          <li>lorem</li>
          <li>lorem</li>
               <li>lorem</li>
               <li>lorem</li>
          </ul>
    </div>
          <div class="sas2-3">
         <ul class="cities1">
          <li><strong>Cities we serve</strong></li>
          <li>lorem</li>
          <li>lorem</li>
               <li>lorem</li>
               <li>lorem</li>
          </ul>
    </div>
          <span className="sas2-4" id="IconSpan">
         <ul>
          <li class="li_img"><strong>Find us on </strong></li>
          <li class="li_img"><a href=""><AiFillFacebook className="footerIcons" /></a></li>
          <li class="li_img"><a href=""><AiFillGoogleCircle className="footerIcons" /> </a></li>
          <li class="li_img"><a href=""><AiFillLinkedin className="footerIcons" /></a></li>

          </ul>
    </span>
       <p class="worklink">© 2020 Muckin.All rights reserved.</p>
      </div>

      <div class="sas">
        <div class="stars">
          <p style={{color: "white"}}><strong>Rate our Website</strong></p>
          <form action="">
            <input class="star star-5" id="star-5" type="radio" name="star" />
            <label class="star star-5" for="star-5"></label>
            <input class="star star-4" id="star-4" type="radio" name="star" />
            <label class="star star-4" for="star-4"></label>
            <input class="star star-3" id="star-3" type="radio" name="star" />
            <label class="star star-3" for="star-3"></label>
            <input class="star star-2" id="star-2" type="radio" name="star" />
            <label class="star star-2" for="star-2"></label>
            <input class="star star-1" id="star-1" type="radio" name="star" />
            <label class="star star-1" for="star-1"></label>
          </form>
        </div>
        <br></br>
        <br></br>
        <div class="sm">
          <form id="suggestion_box" action="" method="post">
            <h3>Suggestion box</h3>
            <fieldset>
              <textarea
                placeholder="Suggestion"
                tabindex="5"
                name="suggestion_text"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="suggestion_box"
                value="text to send"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};