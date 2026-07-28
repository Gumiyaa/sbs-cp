/* =============================================
 * Clients — Logo slider
 * ============================================= */

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import clients from '../assets/data/clients';
import 'swiper/css';

const Clients = () => {
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <section id="clients" className="section-padding section-bg" aria-labelledby="clients-heading">
      <div className="container">
        {/* Header: left-aligned */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-7">
            <p className="section-tagline">Klien Kami</p>
            <h2 className="section-title" id="clients-heading">
              Dipercaya oleh <span className="text-accent">Perusahaan Terkemuka</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Mitra terpercaya dari berbagai sektor industri di Indonesia.
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={28}
            slidesPerView={2}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{ 576: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 992: { slidesPerView: 5 } }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="client-logo-card">
                  <div className="client-logo-placeholder">
                    {client.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </div>
                  <p className="client-name">{client.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
