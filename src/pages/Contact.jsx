import React, { useEffect, useRef } from "react";
import Threads from "../blocks/Backgrounds/Threads/Threads";
import Header from "../components/Header";
import "../styles/Contact.css";
const Contact = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('animate');
      }
    }, 100);
  }, []);
  return (
    <div className="contact-page-container contact-bg-grid" style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      {/* Gunakan Header dan kirimkan currentPage="contact" agar highlight benar */}
      <Header currentPage="contact" showLanyard={false} />
      <div style={{display: 'flex', width: '100%'}}>
        <div className="contact-left-title-container">
          <h1 className="contact-left-title" ref={titleRef}>
            <span className="line">LETS</span>
            <span className="line">WORK</span>
            <span className="line">TOGETHER</span>
          </h1>
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
            <form
              className="contact-form-card"
              action="https://formspree.io/f/movlqpzy"
              method="POST"
            >
              <h2 className="contact-title">Contact</h2>
              <div className="contact-input-group">
                <input className="contact-input" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="contact-input-group">
                <input className="contact-input" type="email" name="email" placeholder="Your email" required />
              </div>
              <div className="contact-input-group">
                <input className="contact-input" type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="contact-input-group">
                <textarea className="contact-textarea" name="message" placeholder="Your Message" required />
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