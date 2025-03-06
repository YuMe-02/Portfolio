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

// Home component extracted for reuse
const Home = () => (
  <div className="main-content">
    <div className="center-content">
      <div className="profile-image animate delay-1">
      <img src={`${process.env.PUBLIC_URL}/cover.png`} alt="cover" />
      </div>
      <div className="bio">
        <h1 className="name animate delay-2">Darren Yu</h1>
        <p className="title animate delay-2">Developer &amp; Designer</p>
        <div className="social-links animate delay-3">
          <a href="mailto:darrenyu90@gmail.com" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="https://www.instagram.com/yume.arw?igsh=MzRlODBiNWFlZA==" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://github.com/YuMe-02" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/darren-yu-88341218b/" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div className="right-panel">
      <div className="info-section animate delay-3">
        <div className="info-label">EDUCATION</div>
        <div className="info-value">B.S. in Computer Engineering</div>
        <div className="info-detail">UC Santa Cruz • 2020-2024</div>
      </div>

      <div className="info-section animate delay-3">
        <div className="info-label">LOCATION</div>
        <div className="info-value">San Francisco, California</div>
      </div>

      <div className="info-section animate delay-3">
        <div className="info-label">SEEKING</div>
        <div className="info-value">Frontend, Full Stack</div>
        <div className="info-detail">Software Engineering roles</div>
      </div>

      <div className="cta-buttons animate delay-4">
        <a href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" className="btn btn-outline">Resume</a>
        <a href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" className="btn btn-filled">Photography</a>
      </div>
    </div>
  </div>
);

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