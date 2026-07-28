/* =============================================
 * Testimonials — Top accent bar cards
 * ============================================= */

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import testimonials from '../assets/data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  useEffect(() => { AOS.refresh(); }, []);

  const avatarColors = ['#0F3040', '#A56F63', '#464858', '#D99B7F', '#1e4d5e'];

  return (
    <section id="testimonials" className="section-padding" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header: left-aligned */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-7">
            <p className="section-tagline">Testimoni</p>
            <h2 className="section-title" id="testimonials-heading">
              Apa Kata <span className="text-accent">Klien Kami</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Kepuasan klien adalah prioritas utama kami. Ini kata mereka.
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{ 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <i className="bi bi-quote"></i>
                  </div>
                  <p className="testimonial-text">{item.quote}</p>
                  <div className="testimonial-author">
                    <div
                      className="testimonial-avatar"
                      style={{ background: avatarColors[idx % avatarColors.length] }}
                    >
                      {item.name.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <div>
                      <h6 className="mb-0">{item.name}</h6>
                      <small>{item.role} — {item.company}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
