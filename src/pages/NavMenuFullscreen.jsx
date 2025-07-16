
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/NavMenu.css';

const menuItems = [
  { name: 'HOME', page: 'home' },
  { name: 'CERTIFICATES', page: 'certificates' },
  { name: 'PROJECTS', page: 'projects' },
  { name: 'ABOUT', page: 'about' },
  { name: 'CONTACT', page: 'contact' }
];

const NavMenuFullscreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Ambil currentPage dari query string jika ada
  const params = new URLSearchParams(location.search);
  const currentPage = params.get('currentPage') || 'home';

  return (
    <div className="fullscreen-menu active">
      {/* Header */}
      <header className="menu-header">
        <div className="menu-logo">KELVIANOV/2025</div>
        <div className="menu-close" onClick={() => navigate(-1)}>
          ×
        </div>
        <div className="menu-contact-btn">CONTACT NOW</div>
      </header>

      {/* Menu Content */}
      <div className="menu-content">
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              onClick={() => {
                if (item.page === 'home') {
                  window.location.href = '/';
                } else if (item.page === 'certificates') {
                  window.location.href = '/certificates';
                } else if (item.page === 'projects') {
                  window.location.href = '/portfolio';
                } else if (item.page === 'about') {
                  window.location.href = '/about';
                } else if (item.page === 'contact') {
                  window.location.href = '/contact';
                }
              }}
            >
              <span className={`menu-label ${currentPage === item.page ? 'gray' : 'white'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="menu-footer">
        <div className="menu-footer-left">
          <span>©2025 ALL RIGHTS RESERVED</span>
        </div>
        <div className="menu-footer-right">
          <a href="https:/www.instagram.com/kelvianov/" target="_blank" rel="noopener noreferrer">
            <span>INSTAGRAM ↗</span>
          </a>
          <a href="https://github.com/kelvianov" target="_blank" rel="noopener noreferrer">
            <span>GITHUB ↗</span>
          </a>
          <a href="https://www.linkedin.com/in/kelvianov/" target="_blank" rel="noopener noreferrer">
            <span>LINKEDIN ↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NavMenuFullscreen;
