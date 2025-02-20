import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import MobileNav from './components/MobileNav';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';
import ProjectCard from './components/ProjectCard';
import ProjectMenu from './components/ProjectMenu';
import { projectDetails } from './components/ProjectsData';

// Wrapper component to handle navigation logic
const AppContent = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      
      if (isMobile && !newIsMobile && location.pathname === '/project-detail') {
        navigate('/projects');
      }
      
      setIsMobile(newIsMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, location.pathname, navigate]);

  const handleNavigation = (path) => {
    if (path !== location.pathname.slice(1) && !isAnimating) {
      setIsAnimating(true);
      setSelectedProject(null);
      setTimeout(() => {
        navigate(`/${path}`);
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
        navigate('/project-detail');
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
      navigate('/projects');
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
        activeComponent={location.pathname.slice(1) || 'home'}
      />
      <Viewfinder />
      <Header />
      <Menu 
        onNavigate={handleNavigation} 
        activeComponent={location.pathname.slice(1) || 'home'}
      />
      
      <div className={`content-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        <Routes>
          <Route path="/" element={
            <div className="home-content">
              <h2>Welcome</h2>
            </div>
          } />
          <Route path="/home" element={
            <div className="home-content">
              <h2>Welcome</h2>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={
            <div className="projects-layout">
              <ProjectMenu onProjectClick={handleProjectClick} />
              {selectedProject && !isMobile && (
                <div className="project-detail desktop">
                  <ProjectCard {...selectedProject} />
                </div>
              )}
            </div>
          } />
          <Route path="/project-detail" element={
            selectedProject && isMobile && (
              <div className="project-detail mobile">
                <button 
                  onClick={handleBackToProjects}
                  className="mb-8 text-sm hover:opacity-70 transition-opacity"
                >
                  ← BACK TO PROJECTS
                </button>
                <ProjectCard {...selectedProject} />
              </div>
            )
          } />
          <Route path="/inspiration" element={<Inspo />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;