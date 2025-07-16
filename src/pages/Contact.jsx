import React from "react";
import Threads from "../blocks/Backgrounds/Threads/Threads";
import Header from "../components/Header";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-page-container contact-bg-grid" style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      {/* Gunakan Header dan kirimkan currentPage="contact" agar highlight benar */}
      <Header currentPage="contact" showLanyard={false} />
      <div style={{display: 'flex', width: '100%'}}>
        <div className="contact-left-title-container">
          <h1 className="contact-left-title">LETS<br />WORK TOGETHER</h1>
        </div>
        <div style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
          {/* Grid background */}
          <div className="contact-bg-grid-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '200px 100%',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          {/* Threads background */}
          <Threads
            color={[1, 1, 1]}
            amplitude={1}
            distance={0.7}
            enableMouseInteraction={true}
            style={{
              position: 'absolute',
              top: '-40px',
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          <div className="contact-form-container">
            <form className="contact-form-card">
              <h2 className="contact-title">Contact</h2>
              <div className="contact-input-group">
                <input className="contact-input" type="text" placeholder="Your name" />
              </div>
              <div className="contact-input-group">
                <input className="contact-input" type="email" placeholder="Your email" />
              </div>
              <div className="contact-input-group">
                <input className="contact-input" type="text" placeholder="Subject" />
              </div>
              <div className="contact-input-group">
                <textarea className="contact-textarea" placeholder="Your Message" />
              </div>
              <button className="contact-submit-btn" type="submit">
                <span role="img" aria-label="mail"></span> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
