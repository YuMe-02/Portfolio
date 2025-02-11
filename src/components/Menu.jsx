import React from "react";

const Menu = ({ onNavigate, activeComponent }) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className={activeComponent === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
            }}
            className={activeComponent === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}
            className={activeComponent === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('inspiration');
            }}
            className={activeComponent === 'inspiration' ? 'active' : ''}
          >
            Inspiration
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;