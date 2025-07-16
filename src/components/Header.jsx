
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavMenu from './NavMenu';
import '../styles/Header.css';

function Header({ currentPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  // Deteksi current page dari path jika prop tidak diberikan
  let page = currentPage;
  if (!page) {
    const normPath = location.pathname.replace(/\/+$/, '').toLowerCase();
    if (normPath === '' || normPath === '/' || normPath === '/home') page = 'home';
    else if (normPath === '/contact') page = 'contact';
    else if (normPath === '/certificates') page = 'certificates';
    else if (normPath === '/portfolio' || normPath === '/projects') page = 'projects';
    else if (normPath === '/about') page = 'about';
    else page = 'home';
  }
  // Handler untuk buka navmenu fullscreen page
  const handleMenuIconClick = () => {
    navigate(`/navmenufullscreen?currentPage=${page}`);
  };

  return (
    <header className="header">
      <div className="logo">
        KELVIANOV.
      </div>
      <NavMenu onMenuIconClick={handleMenuIconClick} />
      <div className="header-right hide-when-navopen">
        <button
          className="contact-btn"
          onClick={page === 'contact' ? () => navigate('/') : () => navigate('/contact')}
        >
          {page === 'contact' ? 'HOME' : 'CONTACT NOW'}
        </button>
      </div>
    </header>
  );
}

export default Header;
