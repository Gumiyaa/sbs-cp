/* =============================================
 * About Section — Asymmetric layout with accent stripe
 * ============================================= */

import { useEffect } from 'react';
import AOS from 'aos';

const About = () => {
  useEffect(() => { AOS.refresh(); }, []);

  const vision = {
    title: 'Visi',
    text: 'Menjadi perusahaan konstruksi terdepan di Indonesia yang dikenal karena inovasi, kualitas, dan keberlanjutan.',
  };

  const missions = [
    'Menyediakan layanan konstruksi berkualitas tinggi sesuai standar internasional.',
    'Mengedepankan integritas dan transparansi dalam setiap proyek.',
    'Mengembangkan inovasi teknologi konstruksi terkini.',
    'Membangun hubungan jangka panjang dengan klien dan mitra.',
  ];

  const values = [
    { icon: 'bi-star-fill', title: 'Integritas', desc: 'Komitmen pada kejujuran dan etika' },
    { icon: 'bi-award-fill', title: 'Kualitas', desc: 'Standar tertinggi dalam setiap pekerjaan' },
    { icon: 'bi-people-fill', title: 'Kolaborasi', desc: 'Kerja sama tim yang sinergis' },
    { icon: 'bi-lightbulb-fill', title: 'Inovasi', desc: 'Solusi kreatif dan berkelanjutan' },
  ];

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container">
        {/* Header: left-aligned tagline + title, right-aligned desc */}
        <div className="about-header row mb-0" data-aos="fade-up">
          <div className="col-lg-7">
            <p className="section-tagline">Tentang Kami</p>
            <h2 className="section-title" id="about-heading">
              Membangun Kepercayaan Sejak <span className="text-accent">2003</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Dengan pengalaman lebih dari 20 tahun, kami telah menyelesaikan
              berbagai proyek konstruksi berskala nasional.
            </p>
          </div>
        </div>

        {/* Asymmetric two-column: content left, image right */}
        <div className="about-grid" style={{ marginTop: 60 }}>
          <div data-aos="fade-right">
            <div className="about-card">
              <div className="about-card-icon">
                <i className="bi bi-eye-fill"></i>
              </div>
              <h4>{vision.title}</h4>
              <p>{vision.text}</p>
            </div>

            <div className="about-card" style={{ marginTop: 24 }}>
              <div className="about-card-icon">
                <i className="bi bi-flag-fill"></i>
              </div>
              <h4>Misi Kami</h4>
              <ul className="mission-list">
                {missions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="about-image-placeholder">
              <i className="bi bi-building"></i>
              <span>Since 2003</span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="row g-4" style={{ marginTop: 80 }}>
          {values.map((val, idx) => (
            <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="value-card text-center">
                <div className="value-icon">
                  <i className={`bi ${val.icon}`}></i>
                </div>
                <h5>{val.title}</h5>
                <p className="mb-0">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
