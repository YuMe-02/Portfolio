import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import MobileNav from './components/MobileNav';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';
import ProjectCard from './components/ProjectCard';
import ProjectMenu from './components/ProjectMenu';
import { projectDetails } from './components/ProjectsData';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('about');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      
      if (isMobile && !newIsMobile && activeComponent === 'project-detail') {
        setActiveComponent('projects');
      }
      
      setIsMobile(newIsMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, activeComponent]);

  const handleNavigation = (component) => {
    if (component !== activeComponent && !isAnimating) {
      setIsAnimating(true);
      setSelectedProject(null);
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
      const project = projectDetails[projectId];
      setSelectedProject(project);
      if (isMobile) {
        setActiveComponent('project-detail');
      }
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
      
      <MobileNav 
        onNavigate={handleNavigation} 
        activeComponent={activeComponent}
      />
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
          <div className="projects-layout">
            <ProjectMenu onProjectClick={handleProjectClick} />
            {selectedProject && !isMobile && (
              <div className="project-detail desktop">
                <ProjectCard {...selectedProject} />
              </div>
            )}
          </div>
        )}
        {activeComponent === 'project-detail' && selectedProject && isMobile && (
          <div className="project-detail mobile">
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