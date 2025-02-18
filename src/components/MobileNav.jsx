import React, { useState } from 'react';

const MobileNav = ({ onNavigate, activeComponent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (component) => {
    onNavigate(component);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="mobile-nav">
        <span className="mobile-nav-brand">Darren Yu</span>
        <button 
          onClick={toggleMenu}
          className="mobile-nav-toggle"
        >
          Menu
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`mobile-menu-button ${activeComponent === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`mobile-menu-button ${activeComponent === 'about' ? 'active' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`mobile-menu-button ${activeComponent === 'projects' ? 'active' : ''}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('inspiration')}
                className={`mobile-menu-button ${activeComponent === 'inspiration' ? 'active' : ''}`}
              >
                Inspiration
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;