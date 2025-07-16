import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutV2Section.css';

const AboutV2Section = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Trigger yang lebih lambat - animasi mulai ketika section hampir di tengah layar
        const startTrigger = windowHeight * 0.3; // Mulai ketika 30% section terlihat
        const endTrigger = windowHeight * -0.3;  // Selesai ketika section hampir keluar layar
        
        let progress = 0;
        
        if (rect.top <= startTrigger && rect.top >= endTrigger) {
          progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
          progress = Math.max(0, Math.min(1, progress));
        } else if (rect.top < endTrigger) {
          progress = 1;
        }
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="aboutv2-section" ref={sectionRef}>
      <div className="aboutv2-section-header">
        <span className="aboutv2-section-number">03</span>
        <span className="aboutv2-section-titlebar">//WHO AM I</span>
        <span className="aboutv2-section-since">SINCE 2025</span>
      </div>
      <div className="aboutv2-section-content">
        <div style={{position: 'relative', width: '100%'}}>
          <h1 
            className="aboutv2-section-title-main"
            style={{
              transform: `translateY(${scrollProgress > 0.35 ? (scrollProgress - 0.35) / 0.65 * -120 : 0}px) scale(${scrollProgress > 0.35 ? 1 - ((scrollProgress - 0.35) / 0.65) * 0.5 : 1})`,
              zIndex: 1,
              position: 'relative',
              transition: 'transform 0.7s cubic-bezier(.4,1.5,.6,1)',
              willChange: 'transform'
            }}
          >
            MORE ABOUT<br/>KELVIANOV<span className="aboutv2-section-copyright">©</span>
          </h1>
          <div 
            className="aboutv2-image-container"
            style={{
              marginTop: '-60px',
              zIndex: 2,
              position: 'absolute',
              left: 0,
              right: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
              top: '0',
              height: '100vh',
              transform: `translateY(${scrollProgress > 0.35 ? 400 - ((scrollProgress - 0.35) / 0.65) * 400 : 400}px)`,
              opacity: scrollProgress > 0.05 ? 1 : 0,
              transition: 'transform 0.7s cubic-bezier(.4,1.5,.6,1), opacity 0.7s cubic-bezier(.4,1.5,.6,1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              overflow: 'visible'
            }}
          >
            <img 
              src="/images/aboutV2.png" 
              alt="About Kelvianov" 
              className="aboutv2-image"
              style={{
                maxHeight: '100vh',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
          {/* Tampilkan deskripsi di bawah gambar jika scroll sudah selesai (progress 1) */}
          {scrollProgress === 1 && (
         <div className="aboutv2-desc-wrapper">               
                <div className="aboutv2-desc-title">                 
                    I&apos;M A CREATIVE SOFTWARE ENGINEER FROM INDONESIA.<br/>                 
                    PASSIONATE ABOUT ELEGANT INTERFACES, MODERN CODE, AND USER-CENTERED DESIGN.               
                </div>               
                <div className="aboutv2-desc-text">                 
                    I build scalable web applications with modern technologies like React and Next.js. My approach combines technical precision with creative problem-solving, turning complex ideas into clean, maintainable code that delivers exceptional user experiences.               
                </div>
              {/* Tombol Download Resume */}
                <a
                href="/assets/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutv2-download-btn"
                >
                DOWNLOAD RESUME
                </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutV2Section;