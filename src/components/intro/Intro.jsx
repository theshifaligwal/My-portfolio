import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { GitHub, LinkedIn, Twitter, Instagram } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "Front End Developer", "Back End Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Shifali Gwal</h1>
          <h3>
            I'm <span ref={textRef}></span>
          </h3>
          <div className="icon-container">
            <a href="https://www.instagram.com/shifali_gwal/">
              <Instagram className="icon instagram" />
            </a>
            <a href="https://github.com/theshifaligwal">
              <GitHub className="icon github" />
            </a>
            <a href="https://twitter.com/Theshifaligwal">
              <Twitter className="icon twitter" />
            </a>
            <a href="https://www.linkedin.com/in/theshifaligwal/">
              <LinkedIn className="icon linkedIn" />
            </a>
          </div>



        </div>
        <a href="#portfolio" className="downArrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};