import React, { useState } from 'react';
import '../styles/CornerCarouselWidget.css';

const slides = [
  { value: 24, label: 'Stuff I built when I should’ve been asleep' },
  { value: '274K', label: 'Total lines of code keeping me up at night' },
  { value: 17, label: 'When I lowkey felt like Einstein' },
  { value: 775, label: 'Cigarettes smoked so far this year' },
];

const CornerCarouselWidget = () => {
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="corner-carousel-widget">
      <div className="ccw-circle">
        <div className="ccw-value">{String(slides[current].value).padStart(3, '0')}</div>
        <div className="ccw-label">{slides[current].label}</div>
        <div className="ccw-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`ccw-dot${idx === current ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CornerCarouselWidget;
