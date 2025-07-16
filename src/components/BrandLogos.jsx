import React from "react";
import "../styles/BrandLogos.css";

const brands = [
  // Phase 1: Discover and Analysis
  { name: "theo", textClass: "brand-script" },
  { name: "oslo.", textClass: "brand-oslo" },
  
  // Phase 2: Design and Implement
  { name: "AURORA", textClass: "brand-elegant" },
  { name: "velocity", textClass: "brand-modern" },
  { name: "NEXUS", textClass: "brand-display" },
  { name: "Horizon", textClass: "brand-clean" },
  { name: "Bubble", textClass: "brand-rounded" },
  
  // Phase 3: Deliver and Monitor
  { name: "ZENITH", textClass: "brand-minimal" },
  { name: "Heritage", textClass: "brand-classic" },
  { name: "Chronicle", textClass: "brand-editorial" },
  { name: "Prestige", textClass: "brand-refined" },
  { name: "CODE X", textClass: "brand-tech" },
];

const BrandLogos = () => (
  <div className="brand-logos-marquee-wrapper">
    <div className="brand-logos-section brand-logos-marquee">
      {brands.concat(brands).map((brand, idx) => (
        <div className="brand-card" key={brand.name + idx}>
          <span className={`brand-text ${brand.textClass}`}>{brand.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BrandLogos;