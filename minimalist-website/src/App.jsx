import React, { useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Loader from './components/Loader';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const inspoRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  // Scroll handler function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* Corner borders */}
      <div className="corner-border corner-top-left"></div>
      <div className="corner-border corner-top-right"></div>
      <div className="corner-border corner-bottom-left"></div>
      <div className="corner-border corner-bottom-right"></div>
      
      {/* Pass scroll handler and refs to Menu */}
      <Menu 
        onNavigate={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          inspiration: () => scrollToSection(inspoRef)
        }} 
      />
      
      {/* Add refs and section class to each section */}
      <div ref={homeRef} className="section">
        <Header />
      </div>
      
      <div ref={aboutRef} className="section">
        <About />
      </div>
      
      <div ref={projectsRef} className="section">
        <Viewfinder />
      </div>
      
      <div ref={inspoRef} className="section">
        <Inspo />
      </div>
      
      <Loader />
    </div>
  );
}

export default App;