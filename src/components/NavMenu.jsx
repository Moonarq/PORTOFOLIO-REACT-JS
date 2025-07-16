import React from 'react';
import '../styles/NavMenu.css';

const NavMenu = ({ onMenuIconClick }) => {

  return (
    <nav className="nav-menu">
      <div className="menu-dots" onClick={onMenuIconClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavMenu;
