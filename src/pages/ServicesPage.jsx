/* =============================================
 * Services Page — Halaman Layanan
 * ============================================= */

import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWA from '../components/FloatingWA';
import services from '../assets/data/services';

const ServicesPage = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="page-banner" aria-label="Banner Layanan">
        <div className="page-banner-overlay" aria-hidden="true"></div>
        <div className="container page-banner-content">
          <h1>Layanan</h1>
          <p>Solusi Konstruksi Terintegrasi</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {services.map((svc, idx) => (
              <div className="col-md-6 col-lg-4" key={svc.id} data-aos="fade-up" data-aos-delay={idx * 80}>
                <div className="service-card full-service-card">
                  <div className="service-number">0{idx + 1}</div>
                  <div className="service-icon">
                    <i className={`bi ${svc.icon}`}></i>
                  </div>
                  <h5>{svc.title}</h5>
                  <p>{svc.description}</p>
                  <div className="service-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingWA />
    </>
  );
};

export default ServicesPage;
