import React from 'react';
import { experienceData } from './ExperienceData';

const ExperienceMenu = ({ onExperienceClick }) => {
  // Convert the experience details object into an array and take only the needed fields
  const experiences = Object.values(experienceData).map(({ id, title, company, date, type }) => ({
    id,
    title,
    company,
    date,
    type
  }));

  return (
    <div className="experience-menu">
      {experiences.map((experience) => (
        <div 
          key={experience.id}
          className="group cursor-pointer"
          onClick={() => onExperienceClick(experience.id)}
        >
          <div className="text-sm">
            {experience.date} / {experience.company} / {experience.type}
          </div>
          <h2>{experience.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ExperienceMenu;
