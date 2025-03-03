import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import MobileNav from './components/MobileNav';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';
import ProjectCard from './components/ProjectCard';
import ProjectMenu from './components/ProjectMenu';
import { projectDetails } from './components/ProjectsData';

// Home component extracted for reuse
const Home = () => (

  <div class="main-content">

      <div class="center-content">
      <div class="profile-image animate delay-1">
          <img src="/cover.png" alt="Darren Yu" />
      </div>
      <div class="bio">
          <h1 class="name animate delay-2">Darren Yu</h1>
          <p class="title animate delay-2">Developer &amp; Designer</p>
          <div class="social-links animate delay-3">
              <a href="mailto:darrenyu90@gmail.com" class="social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
              </a>
              <a href="https://www.instagram.com/yume.arw?igsh=MzRlODBiNWFlZA==" class="social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
              </a>
              <a href="https://github.com/YuMe-02" class="social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
              </a>
              <a href="https://www.linkedin.com/in/darren-yu-88341218b/" class="social-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                  </svg>
              </a>
          </div>
      </div>
    </div>
    
    <div class="right-panel">
        <div class="info-section animate delay-3">
            <div class="info-label">EDUCATION</div>
            <div class="info-value">B.S. in Computer Engineering</div>
            <div class="info-detail">UC Santa Cruz • 2020-2024</div>
        </div>

        <div class="info-section animate delay-3">
            <div class="info-label">LOCATION</div>
            <div class="info-value">San Francisco, California</div>
        </div>

        <div class="info-section animate delay-3">
            <div class="info-label">SEEKING</div>
            <div class="info-value">Frontend, Full Stack</div>
            <div class="info-detail">Software Engineering roles</div>
        </div>

        <div class="cta-buttons animate delay-4">
            <a href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" class="btn btn-outline">Resume</a>
            <a href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" class="btn btn-filled">Photography</a>
        </div>
    </div>

  </div>
);

// Wrapper component to handle navigation logic
const AppContent = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    // Detect Windows OS
    const isWindows = navigator.platform.toUpperCase().indexOf('WIN') >= 0;

    // Detect if user is using Firefox
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox) {
      document.body.classList.add('firefox');
    }

    // If both conditions are met, add a class to the body
    if (isWindows && isFirefox) {
      document.body.classList.add('windows-firefox');
    }


    // Detect if user is on a Mac OS
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