import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubProfile.scss";
import { githubProfileSection } from "../../portfolio";

export default function GithubProfile() {
  if (!githubProfileSection.display) {
    return null;
  }



  return (
    <div className="github-profile-main" id="github">
      <div className="github-header">
        <h1 className="github-heading">{githubProfileSection.title}</h1>
      </div>
      <div className="github-chart-container">
        <GitHubCalendar
          username={githubProfileSection.userName}
          blockSize={15}
          blockMargin={5}
          color="#2EA043"
          fontSize={16}
        />
      </div>
    </div>
  );
}
