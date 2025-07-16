

import React, { useRef, useEffect, useState } from 'react';
import '../styles/HeroSection.css';
import LiquidChrome from '../blocks/Backgrounds/LiquidChrome/LiquidChrome';
import GlitchText from '../blocks/TextAnimations/GlitchText/GlitchText';
import HeroWidgetCarousel from './HeroWidgetCarousel';
import CornerCarouselWidget from './CornerCarouselWidget';


const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
    }
    return () => {
      if (observer && section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Widget carousel pojok kanan atas */}
      <CornerCarouselWidget />
      {/* LiquidChrome background hanya aktif saat HeroSection terlihat */}
      {isVisible && (
        <div className="liquid-bg-container">
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            amplitude={0.3}
            speed={0.2}
            style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
      <div className="hero-content hero-content-left" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-title-bg">
          <h1 className="hero-title">
            <GlitchText speed={1.2} enableShadows={true} enableOnHover={false}>
              MPIW
            </GlitchText>
          </h1>
        </div>
      </div>
      <HeroWidgetCarousel />
    </section>
  );
};

export default HeroSection;
