import React from 'react';

const ProjectMenu = ({ onProjectClick }) => {
  const projects = [
    {
      id: "healora",
      title: "HEALORA",
      date: "Mar.2024",
      category: "Portfolio",
      type: "Design & Dev"
    },
    {
      id: "emuni",
      title: "emuni",
      date: "Feb.2024",
      category: "Portfolio",
      type: "Dev"
    }
  ];

  return (
    <div className="projects-menu">
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