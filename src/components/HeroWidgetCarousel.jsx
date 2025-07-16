import React, { useState, useRef, useEffect } from 'react';
import '../styles/HeroWidgetCard.css';

const cards = [
  {
    icon: (
      <svg width="128" height="128" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vite-purple-glow" cx="128" cy="128" r="128" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BD34FE" stopOpacity="0.5" />
            <stop offset="1" stopColor="#BD34FE" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
            <stop offset="0%" stopColor="#41D1FF"></stop>
            <stop offset="100%" stopColor="#BD34FE"></stop>
          </linearGradient>
          <linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
            <stop offset="0%" stopColor="#FFEA83"></stop>
            <stop offset="8.333%" stopColor="#FFDD35"></stop>
            <stop offset="100%" stopColor="#FFA800"></stop>
          </linearGradient>
        </defs>
        <ellipse cx="128" cy="128" rx="110" ry="50" fill="url(#vite-purple-glow)" filter="url(#vite-blur-outer)" />
        <rect width="256" height="257" rx="48" fill="url(#vite-purple-glow)" />
        <g filter="url(#vite-blur)">
          <path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/>
          <path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/>
        </g>
        <filter id="vite-blur" x="-40" y="-40" width="336" height="337" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="vite-blur-outer" x="-40" y="-40" width="336" height="137" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="14" result="outerBlur"/>
        </filter>
      </svg>
    ),
    title: 'Design system & prototyping with Figma.'
  },
  {
    icon: (
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="react-glow" cx="64" cy="64" r="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3df0ff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="128" height="128" rx="32" fill="url(#react-glow)" />
        <g filter="url(#react-blur)">
          <ellipse cx="64" cy="64" rx="56" ry="24" stroke="#3df0ff" strokeWidth="8" fill="none"/>
          <ellipse cx="64" cy="64" rx="56" ry="24" stroke="#3df0ff" strokeWidth="8" fill="none" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="56" ry="24" stroke="#3df0ff" strokeWidth="8" fill="none" transform="rotate(120 64 64)"/>
          <circle cx="64" cy="64" r="22" fill="#3df0ff"/>
        </g>
        <filter id="react-blur" x="0" y="0" width="128" height="128" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </svg>
    ),
    title: 'Design system & prototyping with Figma.'
  },
  {
    icon: (
      <svg width="128" height="128" viewBox="0 0 49.74245785 51.31690859" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="laravel-red-glow" cx="24.87" cy="25.66" r="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff2d20" stopOpacity="0.1" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="49.74" height="51.32" rx="12" fill="url(#laravel-red-glow)" />
        <g filter="url(#laravel-red-blur)">
          <path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20"/>
        </g>
        <filter id="laravel-red-blur" x="-10" y="-10" width="70" height="71" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </svg>
    ),
    title: 'Design system & prototyping with Figma.'
  },
  {
    icon: (
      <svg width="128" height="128" viewBox="1.466 2.199 285.068 427.602" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.466 2.2h285.068V429.8H1.466z" strokeWidth="3"/>
        <path d="M144 216c0-39.359 31.907-71.267 71.267-71.267 39.359 0 71.267 31.908 71.267 71.267 0 39.36-31.908 71.267-71.267 71.267C175.907 287.267 144 255.36 144 216z" fill="#1abcfe"/>
        <path d="M1.466 358.534c0-39.359 31.907-71.267 71.267-71.267H144v71.267c0 39.36-31.907 71.267-71.267 71.267S1.466 397.894 1.466 358.534z" fill="#0acf83"/>
        <path d="M144 2.2v142.533h71.267c39.36 0 71.267-31.907 71.267-71.267S254.627 2.2 215.267 2.2z" fill="#ff7262"/>
        <path d="M1.466 73.466c0 39.36 31.907 71.267 71.267 71.267H144V2.199H72.733c-39.36 0-71.267 31.908-71.267 71.267z" fill="#f24e1e"/>
        <path d="M1.466 216c0 39.36 31.907 71.267 71.267 71.267H144V144.733H72.733c-39.36 0-71.267 31.908-71.267 71.267z" fill="#a259ff"/>
      </svg>
    ),
    title: 'Design system & prototyping with Figma.'
  },
  // Laragon slide
  {
    icon: (
      <svg width="128" height="128" viewBox="-58.57 -59.93 908.27 797.36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="laragon-blue-glow" cx="400" cy="400" r="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00e0ff" stopOpacity="0.95" />
            <stop offset="0.3" stopColor="#00bfff" stopOpacity="0.7" />
            <stop offset="0.7" stopColor="#3bb6ff" stopOpacity="0.4" />
            <stop offset="1" stopColor="#3bb6ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="-58.57" y="-59.93" width="908.27" height="797.36" rx="120" fill="url(#laragon-blue-glow)" filter="url(#laragon-blur-outer)" />
        <g filter="url(#laragon-blur)">
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="400.117" x2="400.117" y1="22.293" y2="715">
            <stop offset=".018" stopColor="#3bb6ff"/>
            <stop offset=".302" stopColor="#39afff"/>
            <stop offset=".552" stopColor="#36a3ff"/>
            <stop offset=".717" stopColor="#359fff"/>
            <stop offset=".832" stopColor="#3398ff"/>
            <stop offset=".964" stopColor="#3297ff"/>
          </linearGradient>
          <path d="M25.27 252.7c1.36-4.1 58.96-201.67 287.1-204.43 0 0 95.66-108.2 226 0 0 0 35.36 29.06 54.76 89.4 0 0 171.14 25.96 198.84 167.4 0 0 57.73 232.9-137.77 396.53 0 0-27.53 22.03-45.87 32.27 0 0-40.66.06-49.06 0-17.9-.14-29.2 0-45.47 0 0 0-25-8.94-26.03-37.5 0 0-2.1-99.34-1.54-116.5 0 0 .5-16.07-22.9-15.07 0 0-22.33-2.57-25.5 16.63 0 0-.53 102.47-1.03 120.64 0 0-1.57 30.23-35.37 31.7 0 0-121.16 3.66-137.26-2.07 0 0-28.07-5.2-30.17-31.73 0 0-22.9-135.2-27.03-177.27 0 0-76.97-42.67-92.57-54.1 0 0 5.2 137.77 53.03 196.03 0 0 8.34 7.3-8.33 17.67 0 0-6.23 5.2-12.5 2.13 0 0-205.17-114.6-129.6-407.1" fill="url(#a)"/>
          <path d="M254.93 441.17s179 102.03 287.3-61.77c0 0 87.7-114.53 52.77-236.7 0 0 61.5 102.67-57.5 261.97.03.03-100.9 142.03-282.57 36.5z" fill="#069"/>
          <path d="M184.1 417.1s12.77 59.1-26.5 77.7c0 0-89.33-36.8-80.3-104.77 0 0 2.8-16.96 19.43-6.56 0 0 39.54 21.5 70.74 27.7-.04 0 15.83 1.46 16.63 5.93z" fill="#cee6ff"/>
          <path d="M159.3 317.2s13.47-57.57 64.3-53.93c0 0 43.2 1.16 44.73 60.56 0 .04-34.03-88.83-109.03-6.63z" fill="#069"/>
        </g>
        <filter id="laragon-blur" x="-58.57" y="-59.93" width="908.27" height="797.36" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="laragon-blur-outer" x="-58.57" y="-59.93" width="908.27" height="797.36" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="48" result="outerBlur"/>
        </filter>
      </svg>
    ),
    title: 'Local development made easy with Laragon.'
  }
];

const AUTO_PLAY_INTERVAL = 3500;

const HeroWidgetCarousel = () => {
  const [active, setActive] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Drag/swipe handler
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    if (startX.current - x > 40) {
      setActive((prev) => (prev + 1) % cards.length);
      isDragging.current = false;
    } else if (x - startX.current > 40) {
      setActive((prev) => (prev - 1 + cards.length) % cards.length);
      isDragging.current = false;
    }
  };
  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="hero-widget-card"
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onMouseUp={onTouchEnd}
      onMouseLeave={onTouchEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ userSelect: 'none', cursor: 'grab' }}
    >
      <div className="hero-widget-icon">{cards[active].icon}</div>
      <div className="hero-widget-title">{cards[active].title}</div>
      <div className="hero-widget-dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={i === active ? 'carousel-dot active' : 'carousel-dot'}
            onClick={() => setActive(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroWidgetCarousel;
