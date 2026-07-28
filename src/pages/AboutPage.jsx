/* =============================================
 * About Page — Halaman Tentang Kami
 * ============================================= */

import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWA from '../components/FloatingWA';

const AboutPage = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, []);

  const teamValues = [
    { icon: 'bi-people-fill', title: 'Tim Berpengalaman', desc: 'Didukung tenaga ahli bersertifikat di setiap bidang.' },
    { icon: 'bi-shield-check', title: 'Standar Kualitas', desc: 'Menerapkan sistem manajemen mutu ISO 9001:2015.' },
    { icon: 'bi-tree-fill', title: 'Ramah Lingkungan', desc: 'Komitmen pada pembangunan berkelanjutan dan hijau.' },
    { icon: 'bi-handshake', title: 'Kemitraan', desc: 'Menjalin kerjasama jangka panjang dengan mitra strategis.' },
  ];

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="page-banner" aria-label="Banner Tentang Kami">
        <div className="page-banner-overlay" aria-hidden="true"></div>
        <div className="container page-banner-content">
          <h1>Tentang Kami</h1>
          <p>PT Subasumi Cipta Senawira</p>
        </div>
      </section>

      {/* Sejarah — asymmetric */}
      <section className="section-padding" data-aos="fade-up">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <p className="section-tagline">Sejarah Kami</p>
              <h2 className="section-title">
                Perjalanan <span className="text-accent">Dua Dekade</span> di
                Dunia Konstruksi
              </h2>
              <p>
                PT Subasumi Cipta Senawira didirikan pada tahun 2003 di Jakarta
                dengan visi menjadi perusahaan konstruksi terdepan di Indonesia.
                Berawal dari proyek-proyek skala kecil, perusahaan kami tumbuh
                menjadi salah satu kontraktor terpercaya di tanah air.
              </p>
              <p>
                Dengan pengalaman lebih dari 20 tahun, kami telah menangani
                berbagai proyek konstruksi mulai dari gedung perkantoran,
                fasilitas kesehatan, pendidikan, infrastruktur, hingga kawasan
                industri.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image-placeholder">
                <i className="bi bi-building"></i>
                <span>Since 2003</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-bg">
        <div className="container">
          <div className="row mb-5" data-aos="fade-up">
            <div className="col-lg-7">
              <p className="section-tagline">Komitmen Kami</p>
              <h2 className="section-title">Nilai-Nilai <span className="text-accent">Perusahaan</span></h2>
            </div>
            <div className="col-lg-5 d-flex align-items-end">
              <p className="section-desc" style={{ marginBottom: 0 }}>
                Landasan kuat yang menuntun setiap langkah kami dalam bekerja.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {teamValues.map((val, idx) => (
              <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="value-card text-center">
                  <div className="value-icon"><i className={`bi ${val.icon}`}></i></div>
                  <h5>{val.title}</h5>
                  <p className="mb-0">{val.desc}</p>
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

export default AboutPage;
