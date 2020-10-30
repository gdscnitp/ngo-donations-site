import React from "react";
import "./Footer.css";
import github_images from "./images/github.png";

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
          <li>Cities we serve</li>
          <li>lorem</li>
          <li>lorem</li>
               <li>lorem</li>
               <li>lorem</li>
          </ul>
    </div>
          <div class="sas2-2">
         <ul class="cities1">
          <li>Cities we serve</li>
          <li>lorem</li>
          <li>lorem</li>
               <li>lorem</li>
               <li>lorem</li>
          </ul>
    </div>
          <div class="sas2-3">
         <ul class="cities1">
          <li>Cities we serve</li>
          <li>lorem</li>
          <li>lorem</li>
               <li>lorem</li>
               <li>lorem</li>
          </ul>
    </div>
          <span class="sas2-4">
         <ul>
          <li class="li_img">Cities we serve</li>
          <li class="li_img"><img src={github_images} class="img1" alt="cityIma" /></li>
          <li class="li_img"><img src={github_images} class="img1"  alt="cityIma" /></li>
               <li class="li_img"><img src={github_images} class="img1"  alt="cityIma" /></li>

          </ul>
    </span>
       <p class="worklink">@Worklink, all right reserved</p>
      </div>

      <div class="sas">
        <div class="stars">
          <p>Rate our Website</p>
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
