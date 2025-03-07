import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import MobileNav from './components/MobileNav';
import Viewfinder from './components/Viewfinder';
import Experience from './components/Experience';
import ExperienceMenu from './components/ExperienceMenu';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ProjectMenu from './components/ProjectMenu';
import { projectDetails } from './components/ProjectsData';
import { experienceData } from './components/ExperienceData';
// Import Home from modules folder
import Home from './components/Home';

// Wrapper component to handle navigation logic
const AppContent = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isWindows = navigator.platform.toUpperCase().indexOf('WIN') >= 0;
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox) {
      document.body.classList.add('firefox');
    }
    if (isWindows && isFirefox) {
      document.body.classList.add('windows-firefox');
    }

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    if (isMac) {
      document.body.classList.add('mac-os');
    }

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
    // Special case for home
    const navigatePath = path === 'home' ? '' : path;
    
    if ((navigatePath !== location.pathname.slice(1)) && !isAnimating) {
      setIsAnimating(true);
      setSelectedProject(null);
      setSelectedExperience(null);
      setTimeout(() => {
        navigate(`/${navigatePath}`);
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

  const handleExperienceClick = (experienceId) => {
    setIsAnimating(true);
    setTimeout(() => {
      const experience = experienceData[experienceId];
      setSelectedExperience(experience);
      if (isMobile) {
        navigate('/experience-detail');
      }
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  const handleBackToExperiences = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedExperience(null);
      navigate('/experience');
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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
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
          <Route path="/experience" element={
            <div className="experiences-layout">
              <ExperienceMenu onExperienceClick={handleExperienceClick} />
              {selectedExperience && !isMobile && (
                <div className="experience-detail desktop">
                  <ExperienceCard {...selectedExperience} />
                </div>
              )}
            </div>
          } />
          <Route path="/experience-detail" element={
            selectedExperience && isMobile && (
              <div className="experience-detail mobile">
                <button 
                  onClick={handleBackToExperiences}
                  className="mb-8 text-sm hover:opacity-70 transition-opacity"
                >
                  ← BACK TO EXPERIENCES  
                </button>
                <ExperienceCard {...selectedExperience} />
              </div>
            )
          } />
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