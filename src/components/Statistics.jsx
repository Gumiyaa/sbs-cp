/* =============================================
 * Statistics — Bold counter section with separators
 * ============================================= */

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import stats from '../assets/data/stats';

const Statistics = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => { AOS.refresh(); }, []);

  return (
    <section ref={sectionRef} className="section-padding stats-section" aria-label="Statistik perusahaan">
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((stat, idx) => (
            <div className="col-6 col-lg-3" key={stat.id} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="stat-item">
                <div className="stat-number">
                  {visible ? <CountUp end={stat.count} duration={2.5} separator="," /> : '0'}
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
