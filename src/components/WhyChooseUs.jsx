/* =============================================
 * WhyChooseUs — Dark section with numbered advantages
 * ============================================= */

import { useEffect } from 'react';
import AOS from 'aos';

const advantages = [
  { icon: 'bi-person-check-fill', title: 'Tim Profesional', desc: 'Tenaga kerja ahli bersertifikat dengan pengalaman bertahun-tahun di bidang konstruksi.' },
  { icon: 'bi-clock-fill', title: 'Tepat Waktu', desc: 'Komitmen menyelesaikan proyek sesuai jadwal tanpa mengorbankan kualitas.' },
  { icon: 'bi-box-seam-fill', title: 'Material Berkualitas', desc: 'Penggunaan material pilihan bersertifikat SNI dan standar internasional.' },
  { icon: 'bi-cash-stack', title: 'Harga Kompetitif', desc: 'Penawaran harga transparan dan kompetitif tanpa biaya tersembunyi.' },
  { icon: 'bi-patch-check-fill', title: 'Bersertifikat', desc: 'Tersertifikasi ISO 9001, ISO 14001, dan OHSAS 18001 untuk jaminan kualitas.' },
  { icon: 'bi-trophy-fill', title: 'Berpengalaman', desc: 'Lebih dari 20 tahun pengalaman menangani proyek konstruksi berskala nasional.' },
];

const WhyChooseUs = () => {
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <section className="section-padding section-accent-bg" aria-labelledby="why-heading">
      <div className="container">
        {/* Header: left-aligned */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-7">
            <p className="section-tagline-light">Mengapa Memilih Kami</p>
            <h2 className="section-title-light" id="why-heading">
              Keunggulan <span className="text-accent-light">Kami</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 0 }}>
              Komitmen kami pada kualitas dan kepuasan klien menjadikan pilihan terbaik untuk proyek Anda.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {advantages.map((adv, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className={`bi ${adv.icon}`}></i>
                </div>
                <h5>{adv.title}</h5>
                <p>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
