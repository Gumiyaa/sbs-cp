/* =============================================
 * Footer — Company info & links
 * ============================================= */

import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tentang Kami', path: '/tentang-kami' },
    { label: 'Layanan', path: '/layanan' },
    { label: 'Proyek', path: '/proyek' },
    { label: 'Kontak', path: '/kontak' },
  ];

  const serviceLinks = ['General Contractor', 'Design & Build', 'Civil Construction', 'Building Construction', 'Project Management'];

  const socials = [
    { icon: FiFacebook, label: 'Facebook', href: '#' },
    { icon: FiInstagram, label: 'Instagram', href: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiYoutube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                alt="SCS Logo"
                className="brand-logo mb-3"
                style={{ width: 40, height: 40 }}
              />
              <h5>PT Subasumi Cipta Senawira</h5>
            </div>
            <p className="footer-desc">
              Perusahaan konstruksi terpercaya yang berkomitmen pada kualitas,
              integritas, dan kepuasan klien dalam setiap proyek.
            </p>
            <div className="footer-socials">
              {socials.map((social, idx) => (
                <a key={idx} href={social.href} className="social-link" aria-label={social.label}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              {quickLinks.map((link, idx) => (
                <li key={idx}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div className="col-lg-3 col-md-4">
            <h6 className="footer-heading">Layanan</h6>
            <ul className="footer-links">
              {serviceLinks.map((svc, idx) => (
                <li key={idx}><Link to="/layanan">{svc}</Link></li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="col-lg-3 col-md-4">
            <h6 className="footer-heading">Kontak</h6>
            <ul className="footer-contact">
              <li><i className="bi bi-geo-alt"></i> Jl. Raya Konstruksi No. 123, Jakarta Selatan</li>
              <li><i className="bi bi-telephone"></i> +62 21 5555 1234</li>
              <li><i className="bi bi-envelope"></i> info@subasumicipta.co.id</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p>&copy; {new Date().getFullYear()} PT Subasumi Cipta Senawira. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p>
                <Link to="#">Kebijakan Privasi</Link>
                <span style={{ margin: '0 8px', opacity: 0.3 }}>|</span>
                <Link to="#">Syarat & Ketentuan</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
