
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactSection.css';
import LiquidChrome from '../blocks/Backgrounds/LiquidChrome/LiquidChrome';

const ContactSection = () => {

  return (
    <section className="contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* LiquidChrome Background dengan margin dan radius */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '92%',
            height: '96%',
            margin: '0 auto',
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 0 32px 0 rgba(0,0,0,0.10)',
          }}
        >
          <LiquidChrome baseColor={[0.1,0.1,0.1]} amplitude={0.3} speed={0.2} />
        </div>
      </div>
      <div className="contact-center" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="contact-title-section">
          LET'S WORK<br />TOGETHER
        </h2>
        <div className="contact-section-extra-row">
          {/* Tambahan konten jika perlu */}
        </div>
      </div>
      <Link to="/contact" className="contact-section-btn contact-btn-bottom-right">CONTACT NOW</Link>
      <div className="menu-footer-right-contact-fixed">
        <a href="https://www.instagram.com/kelvianov/" target="_blank" rel="noopener noreferrer">
          <span>INSTAGRAM ↗</span>
        </a>
        <a href="https://github.com/kelvianov" target="_blank" rel="noopener noreferrer">
          <span>GITHUB ↗</span>
        </a>
        <a href="https://www.linkedin.com/in/kelvianov/" target="_blank" rel="noopener noreferrer">
          <span>LINKEDIN ↗</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
