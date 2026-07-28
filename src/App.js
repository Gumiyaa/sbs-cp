/* =============================================
 * App.js — Router, Dark Mode, Loading Screen
 * ============================================= */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// Custom styles
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Inisialisasi AOS & loading screen
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    // Loading screen selama 1.5 detik
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode — update class pada body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Loading screen
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner-brand">SCS</div>
          <div className="spinner-bar">
            <div className="spinner-bar-inner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/tentang-kami" element={<AboutPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/layanan" element={<ServicesPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/proyek" element={<ProjectsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/kontak" element={<ContactPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
