import React from 'react';

const ExperienceCard = ({ 
  title, 
  company, 
  description, 
  skills = [], 
  achievements = [],
  location,
  date
}) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="text-sm mb-2 text-gray-300">{company} • {location}</div>
        <div className="text-sm mb-4 text-gray-400">{date}</div>
        
        <p className="project-description">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg mb-2">Key Achievements</h4>
            <ul className="list-disc pl-5">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-300 mb-2">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
