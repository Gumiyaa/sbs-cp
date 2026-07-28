/* =============================================
 * Navbar — Sticky navigation dengan scroll effect
 * ============================================= */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Deteksi scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup mobile menu saat route berubah
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Menu items
  const menus = [
    { label: 'Home', to: 'hero', path: '/' },
    { label: 'Tentang Kami', to: 'about', path: '/' },
    { label: 'Layanan', to: 'services', path: '/' },
    { label: 'Proyek', to: 'projects', path: '/' },
    { label: 'Klien', to: 'clients', path: '/' },
    { label: 'Kontak', to: 'contact', path: '/' },
  ];

  // Komponen menu: gunakan react-scroll jika di halaman Home, React Router Link jika tidak
  const MenuLink = ({ item }) => {
    if (isHome && item.path === '/') {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          offset={-80}
          className="nav-link"
          spy={true}
          activeClass="active"
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </ScrollLink>
      );
    }
    return (
      <Link to={`${item.path}#${item.to}`} className="nav-link">
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'navbar-scrolled' : ''
      } ${darkMode ? 'navbar-dark-mode' : ''}`}
    >
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="SCS Logo"
            className="brand-logo me-2"
          />
          <span className="brand-name d-none d-sm-block">Subasumi Cipta Senawira</span>
        </Link>

        {/* Hamburger */}
        <button
          className={`navbar-toggler ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileOpen}
          aria-controls="navbar-menu"
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
          <span className="toggler-bar"></span>
        </button>

        {/* Menu */}
        <div
          id="navbar-menu"
          className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {menus.map((item) => (
              <li className="nav-item" key={item.to}>
                <MenuLink item={item} />
              </li>
            ))}

            {/* Dark mode toggle */}
            <li className="nav-item ms-lg-2">
              <button
                className="btn-dark-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
