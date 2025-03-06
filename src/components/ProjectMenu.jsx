// Add this to your ProjectMenu.jsx component
import React, { useEffect, useRef } from 'react';
import { projectDetails } from './ProjectsData';

const ProjectMenu = ({ onProjectClick }) => {
  const menuRef = useRef(null);
  
  useEffect(() => {
    if (menuRef.current) {
      // Enable scrolling for this element
      menuRef.current.style.overflowY = 'auto';
      menuRef.current.style.msOverflowStyle = 'auto'; // For IE
      menuRef.current.style.scrollbarWidth = 'thin'; // For Firefox
    }
  }, []);

  // Convert the project details object into an array and take only the needed fields
  const projects = Object.values(projectDetails).map(({ id, title, date, category, type }) => ({
    id,
    title,
    date,
    category,
    type
  }));

  return (
    <div className="projects-menu" ref={menuRef}>
      {projects.map((project) => (
        <div 
          key={project.id}
          className="group cursor-pointer"
          onClick={() => onProjectClick(project.id)}
        >
          <div className="text-sm">
            {project.date} / {project.category} / {project.type}
          </div>
          <h2>{project.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProjectMenu;