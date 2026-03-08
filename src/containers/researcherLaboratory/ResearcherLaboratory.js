import React from "react";
import "./ResearcherLaboratory.scss";
import { researcherLaboratory } from "../../portfolio";

export default function ResearcherLaboratory() {
  if (!researcherLaboratory.display) {
    return null;
  }

  return (
    <div className="researcher-lab-main" id="laboratory">
      <div className="lab-header">
        <h1 className="lab-heading">{researcherLaboratory.title}</h1>
        <p className="lab-subtitle">{researcherLaboratory.subtitle}</p>
      </div>
      <div className="lab-cards-container">
        {researcherLaboratory.labs.map((lab, index) => (
          <div key={index} className="lab-card">
            <div className="lab-card-content">
              <div className="lab-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="lab-title">{lab.name}</h3>
              <div className="lab-status">
                <span className={`status-dot ${lab.status.toLowerCase()}`}></span>
                {lab.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
