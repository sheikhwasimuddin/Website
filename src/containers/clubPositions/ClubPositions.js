import React, {useContext} from "react";
import "../workExperience/WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {clubPositions} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function ClubPositions() {
  const {isDark} = useContext(StyleContext);

  if (!clubPositions.display) {
    return null;
  }

  return (
    <div id="clubs">
      <div className="experience-container" id="clubPositions">
        <div>
          <h1 className="experience-heading">{clubPositions.title}</h1>
          <div className="experience-cards-div">
            {clubPositions.positions.map((card, i) => (
              <ExperienceCard key={i} isDark={isDark} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
