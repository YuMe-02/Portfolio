import React from "react";

const Menu = ({ onNavigate }) => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate.home();
        }}>Home</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate.about();
        }}>About</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate.projects();
        }}>Projects</a></li>
        <li><a href="#" onClick={(e) => {
          e.preventDefault();
          onNavigate.inspiration();
        }}>Inspiration</a></li>
      </ul>
    </nav>
  );
};

export default Menu;