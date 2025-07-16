import React, { useEffect } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutV2Section from '../components/AboutV2Section';
import CertificateSection from '../components/CertificateSection';
import ContactSection from '../components/ContactSection';
import BrandLogos from '../components/BrandLogos';

const Home = () => {
  // Scroll ke atas saat component dimount
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Function untuk scroll ke atas
    const scrollToTop = () => {
      // Scroll ke atas dengan instant behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Backup scroll reset untuk browser yang tidak support scrollTo options
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Scroll ke atas saat component mount
    scrollToTop();
    
    // Event listener untuk beforeunload (saat refresh)
    const handleBeforeUnload = () => {
      scrollToTop();
    };
    
    // Event listener untuk pageshow (saat halaman dimuat)
    const handlePageShow = (event) => {
      if (event.persisted) {
        scrollToTop();
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <PortfolioSection />

      <BrandLogos />

      {/* About V2 Section */}
      <AboutV2Section />

      {/* Certificate Section */}
      <CertificateSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;