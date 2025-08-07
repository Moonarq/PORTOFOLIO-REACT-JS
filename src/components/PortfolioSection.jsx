import React, { useEffect, useRef, useState } from "react";


import FlowingMenu from "./FlowingMenu/FlowingMenu";
import "../styles/PortfolioSection.css";

const portfolioData = [
  {
    image: "/images/project1.0.png",
    title: "Company Profile",
    subtitle: "COMMERCIAL WEBSITE",
    dots: 5,
    activeDot: 0,
    link: "https://monyenyo.com/",
    external: true,
  },
  {
    image: "/images/project3.0.png",
    title: "Portofolio",
    subtitle: "LENSWORK SHOWCASE",
    dots: 5,
    activeDot: 1,
    link: "https://portofolio-tau-lovat.vercel.app/",
    external: true,
  },
  {
    image: "/images/project2.0.png",
    title: "KosKu",
    subtitle: "Commercial Website",
    dots: 5,
    activeDot: 2,
  },
    {
    image: undefined,
    title: "GITHUB",
    subtitle: "SEE MORE ON",
    link: "https://github.com/kelvianov",
    external: true,
    disableHover: true,
  },
];

const PortfolioSection = () => {
  // const navigate = useNavigate();
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  // const [titleVisible, setTitleVisible] = useState(false);
  const [cursor, setCursor] = useState({ show: false, x: 0, y: 0, dark: false });
  // const [fadeOut, setFadeOut] = useState(false);
  // const fadeTimeout = useRef(null);

  // Global mousemove untuk update posisi cursor custom
  useEffect(() => {
    if (!cursor.show) return;
    const handleMove = (e) => {
      setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [cursor.show]);

  useEffect(() => {
    const currentTitle = titleRef.current;

    // Intersection Observer untuk title animation
    const titleObserver = new IntersectionObserver(
      () => {},
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px", // Trigger sedikit lebih awal
      }
    );

    if (currentTitle) titleObserver.observe(currentTitle);

    // Cleanup
    return () => {
      if (currentTitle) titleObserver.unobserve(currentTitle);
    };
  }, []);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      {/* Custom Cursor */}
      <div
        className={`portfolio-img-cursor${cursor.show ? " active" : ""}${cursor.dark ? " dark" : ""}`}
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      >
        VIEW
      </div>

      <div className="portfolio-grid">
        {/* Header */}
        <div className="portfolio-header">
          <span className="portfolio-section-number">02</span>
          <span className="portfolio-section-title">//PROJECT</span>
          <span className="portfolio-section-year">2019 - 2025</span>
        </div>


        {/* Flowing Menu Portfolio */}
        <div className="portfolio-flowing-menu">
          <FlowingMenu
            items={portfolioData.map((data, idx) => {
              const isExternal = data.external === true;
              return {
                link: isExternal ? data.link : `/project${idx + 1}`,
                text: (
                  <div className="portfolio-menu-text-block">
                    <div className="portfolio-menu-subtitle">{data.subtitle}</div>
                    <div className="portfolio-menu-title">{data.title}</div>
                  </div>
                ),
                image: undefined, // Tidak tampilkan gambar
                disableHover: true,
                external: isExternal,
                itemClassName: "portfolio-menu-item",
              };
            })}
            // itemStyle dihapus, gunakan className di FlowingMenu
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;