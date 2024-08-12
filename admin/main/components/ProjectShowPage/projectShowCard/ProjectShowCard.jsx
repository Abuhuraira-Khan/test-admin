// src/components/ProjectShowCard.js
import React from 'react';
import './ProjectShowCard.css';

const ProjectShowCard = (props) => {
  return (
    <div className="project-show-card">
      <img src={props.projectImg} alt={`${props.projectTitle} project`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{props.projectTitle}</h3>
        <p className="project-description">{props.projectDesc}</p>
        <a href={props.PropjectLink} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectShowCard;
