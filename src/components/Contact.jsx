/* =============================================
 * Contact — Split layout with accent left border
 * ============================================= */

import { useState, useEffect } from 'react';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { AOS.refresh(); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: 'bi-geo-alt-fill', title: 'Alamat', text: 'Jl. Raya Konstruksi No. 123, Jakarta Selatan, DKI Jakarta 12345' },
    { icon: 'bi-envelope-fill', title: 'Email', text: 'info@subasumicipta.co.id' },
    { icon: 'bi-telephone-fill', title: 'Telepon', text: '+62 21 5555 1234' },
    { icon: 'bi-clock-fill', title: 'Jam Operasional', text: 'Senin — Jumat: 08.00 — 17.00 WIB' },
  ];

  return (
    <section id="contact" className="section-padding section-bg" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header: left-aligned */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-7">
            <p className="section-tagline">Kontak</p>
            <h2 className="section-title" id="contact-heading">
              Hubungi <span className="text-accent">Kami</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Silakan hubungi kami untuk konsultasi proyek atau informasi lebih lanjut.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Info + Map */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-list">
              {contactInfo.map((info, idx) => (
                <div className="contact-info-item" key={idx}>
                  <div className="contact-info-icon">
                    <i className={`bi ${info.icon}`}></i>
                  </div>
                  <div>
                    <h6>{info.title}</h6>
                    <p className="mb-0">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="map-placeholder mt-4">
              <div className="map-inner">
                <i className="bi bi-map"></i>
                <p>Google Maps</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-card">
              <h4>Kirim Pesan</h4>
              {submitted && (
                <div className="alert alert-success">
                  <i className="bi bi-check-circle me-2"></i>
                  Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Nama Lengkap</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Anda" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="email@domain.com" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Nomor HP</label>
                    <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="+62 xxx" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tulis pesan Anda di sini..." required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-accent">
                      <i className="bi bi-send"></i> Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
