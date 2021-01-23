import React from "react";
import Heading from "./Heading.jsx";
import Accordion from "./Accordion.js";
import Bottom from "./Bottom.jsx";

const Faq = () => {
  return (
    <>
      <Heading />
      <br />
      <Accordion 
      title="abcdddd"
      content="iijifjifjiowejfioewjfiojewiofjewiofjiowejfiojweiofjew"
      />
      <Accordion 
      title="jjdfksfkjeklfjwkeljfklewf"
      content="lhdjshfjdklwjdlwldlwkldkecjkejckejwkskfjkfjkwefkewf"
      />                      
      <Accordion
      title="hfejfkemkfmew"
      content="dhfewhfjewkfjwekfref"
      />
      <br />
      <br />
      <Bottom />
    </>
  );
};

export default Faq;