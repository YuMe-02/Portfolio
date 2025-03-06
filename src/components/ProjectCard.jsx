import React from 'react';
import { projectDetails } from './ProjectsData';

const ProjectCard = ({ 
  title, 
  description, 
  skills = [], 
  imageUrl,
  projectUrl,
  githubUrl 
}) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="project-image"
        />
      )}
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="project-links">
          {projectUrl && (
            <a 
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="project-link"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
