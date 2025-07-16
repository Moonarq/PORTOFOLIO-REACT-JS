
<p align="center">
  <img src="docs/personal-logo.png" width="180" alt="Kelvianov Logo" />
</p>

# Portofolio - React.js

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-29B6F6?style=for-the-badge)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Modern personal portfolio website built with React.js and Vite.**

---

## 📋 Project Overview

This is a modern, fully responsive personal portfolio website built with React.js and Vite. The website showcases your profile, skills, certificates, projects, and contact information with a clean, professional design optimized for all devices.

---

## ✨ Features & Highlights

- **⚛️ React.js with Modern Hooks**  
  Built with React 18+ using functional components and custom hooks for optimal performance.

- **⚡ Vite Build Tool**  
  Lightning-fast development server and optimized production builds.

- **🎯 Single Page Application (SPA)**  
  Smooth navigation for seamless user experience.

- **📱 Fully Responsive Design**  
  Mobile-first approach ensuring perfect display on all devices (mobile, tablet, desktop).

- **🧭 Smart Navigation**  
  Auto-hide navbar on scroll (mobile), hamburger menu with overlay, and smooth scrolling.

- **🏆 Portfolio & Certificates**  
  Showcases your projects and certificates with interactive layouts.

- **💬 Contact Integration**  
  Contact form and WhatsApp button for direct communication.

- **🎨 Modern UI/UX**  
  Clean design with smooth animations and professional styling.

- **⚡ Performance Optimized**  
  Fast loading times with code splitting and asset optimization.

---

## 📁 Project Structure

```
PORTOFOLIO-REACT-JS/
│
├── index.html                  # Main HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── LICENCE                     # Project license
├── README.md                   # Project documentation
│
├── docs/                       # Documentation assets
│   └── personal-logo.png       # Personal logo for README
│
├── public/                     # Static assets
│   ├── vite.svg
│   ├── assets/
│   │   └── CV.pdf
│   └── images/                 # Image assets
│       ├── aboutV2.png
│       ├── certificate1.jpg
│       ├── ...
│
└── src/                        # Source code
    ├── App.jsx                 # Main App component
    ├── main.jsx                # Application entry point
    │
    ├── assets/                 # Internal assets (fonts, icons, images)
    ├── blocks/                 # UI blocks (backgrounds, text animations)
    ├── components/             # React components (sections, widgets, layout, ui)
    ├── hooks/                  # Custom React hooks
    ├── pages/                  # Page components
    ├── services/               # API or service logic
    ├── store/                  # State management
    ├── styles/                 # CSS files
    ├── types/                  # Type definitions
    └── utils/                  # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd "PORTOFOLIO-REACT-JS"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open automatically at `http://localhost:5173` (default Vite port)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

---

## 🛠️ Built With

- **[React.js](https://reactjs.org/)** - Frontend library for building user interfaces
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React
- **Vanilla CSS** - Custom styling without external CSS frameworks

---

## 📱 Key Features Implementation

### Custom Hooks
- **`useNavbarScroll`** - Smart navbar behavior on scroll
- **`useSmoothScroll`** - Smooth scrolling functionality

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Optimized images and assets
- Touch-friendly navigation

### Performance Optimizations
- Component lazy loading
- Image optimization
- Code splitting with Vite
- Minimal bundle size

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

- Kelvianov Putra Kesuma - Initial work

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

If you have any questions or need support, please contact:
- Email: [kelvianov10@gmail.com]
- WhatsApp: [082295029308]

---

**Built with ❤️  | React.js + Vite | Last Updated: July 2025**
