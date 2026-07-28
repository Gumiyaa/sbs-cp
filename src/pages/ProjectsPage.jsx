/* =============================================
 * Projects Page — Halaman Proyek
 * ============================================= */

import { useState, useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWA from '../components/FloatingWA';
import projects, { projectCategories } from '../assets/data/projects';

const ProjectsPage = ({ darkMode, toggleDarkMode }) => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [filter]);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="page-banner" aria-label="Banner Proyek">
        <div className="page-banner-overlay" aria-hidden="true"></div>
        <div className="container page-banner-content">
          <h1>Proyek</h1>
          <p>Portofolio Proyek Unggulan Kami</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Filter */}
          <div className="row mb-4" data-aos="fade-up">
            <div className="col-12">
              <div className="project-filters d-flex flex-wrap justify-content-center gap-2" role="group" aria-label="Filter proyek">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                    onClick={() => setFilter(cat)}
                    aria-pressed={filter === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="row g-4">
            {filtered.map((project, idx) => (
              <div className="col-md-6 col-lg-4" key={project.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-overlay">
                      <span className="project-category">{project.category}</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h5>{project.title}</h5>
                    <div className="project-meta">
                      <span><i className="bi bi-geo-alt"></i> {project.location}</span>
                      <span><i className="bi bi-calendar"></i> {project.year}</span>
                    </div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-5" style={{ color: 'var(--gray-500)' }}>
              <i className="bi bi-folder" style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}></i>
              <p className="mb-0">Tidak ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingWA />
    </>
  );
};

export default ProjectsPage;
