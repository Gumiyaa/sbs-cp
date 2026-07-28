/* =============================================
 * Services — Numbered cards with visual hierarchy
 * ============================================= */

import { useEffect } from 'react';
import AOS from 'aos';
import services from '../assets/data/services';

const Services = () => {
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <section id="services" className="section-padding section-bg" aria-labelledby="services-heading">
      <div className="container">
        {/* Header: left-aligned for visual variety */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-7">
            <p className="section-tagline">Layanan Kami</p>
            <h2 className="section-title" id="services-heading">
              Solusi Konstruksi <span className="text-accent">Komprehensif</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Berbagai layanan konstruksi untuk memenuhi kebutuhan proyek Anda dari awal hingga selesai.
            </p>
          </div>
        </div>

        {/* Service cards with number indicators */}
        <div className="row g-4">
          {services.map((service, idx) => (
            <div
              className="col-md-6 col-lg-3"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="service-card">
                <div className="service-number">0{idx + 1}</div>
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
                <div className="service-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
