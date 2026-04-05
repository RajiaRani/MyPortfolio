import React from "react";
import "./Resume.css";

export default function Resume(){
  return (
   <>
   <div className="main-container">

      {/* Display Resume inside an iframe */}
      <iframe
        src="/rajiarani.pdf"
        width="100%"
        height="800px"
        title="Resume"
      ></iframe>
    </div>
    {/* Download Button */}
      {/* <div className="download-btn">
        <a href="/Chenchaiah.pdf" download="RAJIA RANI.pdf">
          <button>Download Resume</button>
        </a>
      </div> */}
   </>
  );
};