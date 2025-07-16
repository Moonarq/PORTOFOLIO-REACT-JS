import React, { useState } from 'react';
import '../styles/CertificateSection.css';

const certificates = [
  {
  title: 'Advanced Python Certification',
  subtitle: 'CERTIFIED BY SKILVUL',
  details: [
  'COMPLETED ON FEBRUARY 24, 2024',
  'CERTIFIED: KELVIANOV PUTRA KESUMA',
  'ADVANCED PYTHON COURSE',
  'ISSUED BY: SKILVUL.COM',
  'SIGNED BY: AMANDA SIMANDJUNTAK, CPO'
    ],
    image: '/images/certificate1.jpg',
    dots: 1
  },
  {
  title: 'Internship Certificate',
  subtitle: 'PT ERKA SOLUTION GROUP',
  details: [
  'COMPLETED FROM  OCT 2024 – MAR 2025',
  'CERTIFIED: KELVIANOV PUTRA KESUMA',
  'FIELD: SOFTWARE ENGINEERING',
  'PERFORMANCE RATED: "GOOD"',
  'ISSUED ON: APRIL 8, 2025'
    ],
    image: '/images/certificate2.jpg',
    dots: 2
  },
  {
  title: 'React Fundamentals Certification',
  subtitle: 'CERTIFIED BY SKILVUL',
  details: [
  'COMPLETED ON MAY 18, 2025',
  'CERTIFIED: KELVIANOV PUTRA KESUMA',
  'REACT FUNDAMENTALS COURSE',
  'ISSUED BY: SKILVUL.COM',
  'SIGNED BY: AMANDA SIMANDJUNTAK, CPO'
],
    image: '/images/certificate3.jpg',
    dots: 3
  },
  {
  title: 'Front-End Development Introduction',
  subtitle: 'MYSKILL CERTIFICATION',
  details: [
  'AWARDED ON MAY 18, 2025',
  'RECIPIENT: KELVIANOV',
  'TOPIC: WEBSITE DEVELOPMENT FUNDAMENTALS',
  'SIGNED BY: ANGGA FAUZAN, CEO MYSKILL'
],
    image: '/images/certificate4.jpg',
    dots: 4
  },
  {
  title: 'MySQL Database Development Mastery',
  subtitle: 'UDEMY CERTIFICATION',
  details: [
  'AWARDED ON JUNE 9, 2025',
  'RECIPIENT: KELVIANOV PUTRA KESUMA',
  'MASTERED: SQL QUERIES, & DATABASE DESIGN',
  'INSTRUCTORS: TREVOIR WILLIAMS, LEARN IT UNIVERSITY, ANDRII PIATAKHA',
],
    image: '/images/certificate5.jpg',
    dots: 5
  },  
  {
    title: 'CSS & JavaScript Essentials',
    subtitle: 'UDEMY CERTIFICATION',
    details: [
    'AWARDED ON JUNE 9, 2025',
    'RECIPIENT: KELVIANOV PUTRA KESUMA',
    'MASTERED: CORE CONCEPTS IN CSS & JAVASCRIPT',
    'INSTRUCTOR: PROPER DOT INSTITUTE'
],
    image: '/images/certificate6.jpg',
    dots: 6
  },
];


import { useEffect, useRef } from 'react';

const CertificateSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const currentTitle = titleRef.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTitleVisible(true);
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );
    if (currentTitle) observer.observe(currentTitle);
    return () => { if (currentTitle) observer.unobserve(currentTitle); };
  }, []);

  const renderDots = (count) => {
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push(
        <span 
          key={i} 
          className={`dot ${i < count ? 'active' : 'inactive'}`}
        ></span>
      );
    }
    return dots;
  };

  return (
    <section className="certificate-section">
      <div className="certificate-header">
        <span className="certificate-section-number">04</span>
        <span className="certificate-section-title">//CERTIFICATES</span>
        <span className="certificate-section-year">2022 - 2025</span>
      </div>
      <div className="certificate-content">
        <div 
          className={`certificate-title${titleVisible ? ' animate' : ''}`}
          ref={titleRef}
        >
          <span className="word">PRO</span><br />
          <span className="word">CERTIFICATES</span>
        </div>
        <div className="certificate-desc">
          Explore my collection of professional certificates<br />
          that showcase my expertise and commitment to continuous learning.
        </div>
      </div>
      <div className="certificate-accordion-list">
        {certificates.map((cert, idx) => (
          <div className={`certificate-accordion-item${openIndex === idx ? ' open' : ''}`} key={idx}>
            <div className="certificate-accordion-header" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
              <div className="certificate-accordion-left">
                <div className="certificate-dots">
                  {renderDots(cert.dots)}
                </div>
                <div className="certificate-accordion-text">
                  <strong>{cert.title}</strong>
                  <div className="certificate-accordion-sub">{cert.subtitle}</div>
                </div>
              </div>
              <span className={`certificate-accordion-icon${openIndex === idx ? ' open' : ''}`}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="3,4 10,10 17,4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            {openIndex === idx && (
              <div className="certificate-accordion-body">
                {cert.image && (
                  <img src={cert.image} alt={cert.title} className="certificate-accordion-img" />
                )}
                {cert.details.length > 0 && (
                  <ul>
                    {cert.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;