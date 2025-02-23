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

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {[ 'home', 'about', 'projects', 'inspiration'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => handleNavClick(item)}
                className={`mobile-menu-button ${activeComponent === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
