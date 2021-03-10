import React from "react";
import Heading from "./Heading.jsx";
import Accordion from "./Accordion.js";
import Bottom from "./Bottom.jsx";

const Faq = () => {
  return (
    <>
    <br />
      <Heading />
      
      <br />
       <Accordion 
      title="How can I donate items through the website?"
      content="There is an option of DONATE on the navbar. Click on the button and you will reach the donate page where you need
      to fill the required details."
      />
      <Accordion 
      title="How can I contact any ngo?"
      content="Our website will help you to contact an ngo. If u r in need of a help, you can click the NEED button on the navbar and 
      fill the required details on the page."
      />                      
      <Accordion
      title="How will the donation items be collected from me?"
      content="The ngo will be in touch with you and will collect the donated items."
      />
      <Accordion title="hfejfkemkfmew" content="dhfewhfjewkfjwekfref" />
      <br />
      <br />
      <Bottom />
    </>
  );
};

export default Faq;
