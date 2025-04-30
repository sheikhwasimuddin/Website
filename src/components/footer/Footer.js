import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Made By 
        <a
            href="https://github.com/sheikhwasimuddin"
            target="_blank"
            rel="noreferrer"
          >
          {(" Sheikh Wasimuddin")}
          </a>
        </p>
       
      </div>
    </Fade>
  );
}
