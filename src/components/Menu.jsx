import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ onNavigate, activeComponent }) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link
            to="/home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className={activeComponent === 'home' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
            }}
            className={activeComponent === 'about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}
            className={activeComponent === 'projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/inspiration"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('inspiration');
            }}
            className={activeComponent === 'inspiration' ? 'active' : ''}
          >
            Inspiration
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;