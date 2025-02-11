import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: "healora",
      title: "HEALORA",
      date: "Mar.2024",
      category: "Portfolio",
      type: "Design & Dev",
      description: "AI-powered healthcare platform designed to streamline patient care by integrating real-time health monitoring and virtual assistance.",
      skills: ["Next.js", "Tailwind CSS", "Shadcn", "Framer Motion", "Hume AI", "Groq"],
      imageUrl: "/path-to-healora-image.jpg",
      projectUrl: "https://healora.com",
      githubUrl: "https://github.com/yourusername/healora"
    },
    {
      id: "emuni",
      title: "emuni",
      date: "Feb.2024",
      category: "Portfolio",
      type: "Dev",
      description: "Digital learning platform focusing on interactive educational experiences.",
      skills: ["React", "Node.js", "MongoDB", "WebGL"],
      imageUrl: "/path-to-emuni-image.jpg",
      projectUrl: "https://emuni.edu",
      githubUrl: "https://github.com/yourusername/emuni"
    },
    // Add more projects as needed
  ];

  const handleNavigation = (component) => {
    if (component !== activeComponent && !isAnimating) {
      setIsAnimating(true);
      setSelectedProject(null); // Reset selected project when navigating
      setTimeout(() => {
        setActiveComponent(component);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  const handleProjectClick = (projectId) => {
    setIsAnimating(true);
    setTimeout(() => {
      const project = projectsData.find(p => p.id === projectId);
      setSelectedProject(project);
      setActiveComponent('project-detail');
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  const handleBackToProjects = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedProject(null);
      setActiveComponent('projects');
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  return (
    <div className="container">
      <div className="corner-border corner-top-left"></div>
      <div className="corner-border corner-top-right"></div>
      <div className="corner-border corner-bottom-left"></div>
      <div className="corner-border corner-bottom-right"></div>
      
      <Viewfinder />
      <Header />
      <Menu 
        onNavigate={handleNavigation} 
        activeComponent={activeComponent} 
      />
      
      <div className={`content-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {activeComponent === 'home' && (
          <div className="home-content">
            <h2>Welcome</h2>
          </div>
        )}
        {activeComponent === 'about' && <About />}
        {activeComponent === 'projects' && (
          <div className="projects-menu">
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="group relative cursor-pointer mb-16"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="absolute left-0 -top-2 text-sm text-gray-400">
                  {project.date} / {project.category} / {project.type}
                </div>
                <h2 className="text-4xl font-light tracking-wider group-hover:opacity-70 transition-opacity duration-300">
                  {project.title}
                </h2>
              </div>
            ))}
          </div>
        )}
        {activeComponent === 'project-detail' && selectedProject && (
          <div className="project-detail">
            <button 
              onClick={handleBackToProjects}
              className="mb-8 text-sm hover:opacity-70 transition-opacity"
            >
              ← Back to Projects
            </button>
            <ProjectCard {...selectedProject} />
          </div>
        )}
        {activeComponent === 'inspiration' && <Inspo />}
      </div>
    </div>
  );
};

export default App;