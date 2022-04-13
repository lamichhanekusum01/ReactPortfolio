import React from "react";
import "./Body.css";
import resume from "../../Resume.pdf"
import Type from "./Type";
function Body() {
  // function downloadCv(e) {
  //   var link = document.createElement("a");
  //   link.href = `/Resume.pdf`;
  //   link.download = "Resume" + new Date() + ".pdf";
  //   link.click();
  //   link.remove();
  // }
  return (
    <div>
      {" "}
      <div>
        {" "}
        <main>
          <div className="primary"></div>
          <div className="right-circle"></div>

          <div className="content">
            <h1 className="title">
              Kusum
              <br /> Lamichhane
            </h1>
            <p className="skill">
              <span><Type /></span><br />
              Developer based in Kathmandu, Nepal
            </p>
           
            <div> <button><a href={resume} download="Kusum's resume.pdf">Download CV</a> </button>
</div>
          </div>
          <div id="icon">
            <a
              href="https://www.instagram.com/kushum__/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <div className="Icon1"></div>
            </a>
            <a
              href="https://www.facebook.com/kusum.lamichhane.9"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <div className="Icon2">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kusum-lamichhane/ "
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="Icon3">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Body;
