import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
        {text}
      </a>
    </div>
  );
}
