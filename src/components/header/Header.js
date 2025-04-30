import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,

  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo
} from "../../portfolio";
function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" className="sk">Skills</a>
            </li>
          )}
          
          {viewAchievement && (
            <li>
              <a href="#achievements" className="ac">Achievements</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience"className="we">Work Experiences</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education"className="sk">Education</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs"className="bl">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" className="ta">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" className="ac">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact" className="we">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="t">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
