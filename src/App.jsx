import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Loader from './components/Loader';
import Viewfinder from './components/Viewfinder';
import Inspo from './components/Inspo';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (component) => {
    if (component !== activeComponent && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveComponent(component);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  return (
    <div className="container">
      {/* Corner borders */}
      <div className="corner-border corner-top-left"></div>
      <div className="corner-border corner-top-right"></div>
      <div className="corner-border corner-bottom-left"></div>
      <div className="corner-border corner-bottom-right"></div>
      
      {/* Always visible UI elements */}
      <Viewfinder />
      
      <Header />
      <Menu onNavigate={handleNavigation} activeComponent={activeComponent} />
      
      <div className={`content-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {activeComponent === 'home' && <div className="home-content">
          <h2>Welcome</h2>
        </div>}
        {activeComponent === 'about' && <About />}
        {activeComponent === 'projects' && <div className="projects-content">
          {/* Projects content here */}
        </div>}
        {activeComponent === 'inspiration' && <Inspo />}
      </div>
      
      <Loader />
    </div>
  );
};

export default App;