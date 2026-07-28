/* =============================================
 * Projects Section — Galeri proyek dengan filter
 * ============================================= */

import { useState, useEffect } from 'react';
import AOS from 'aos';
import projects, { projectCategories } from '../assets/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.refresh();
  }, [filter]);

  // Filter proyek berdasarkan kategori
  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section header */}
        <div className="row mb-4 text-center" data-aos="fade-up">
          <div className="col-lg-8 mx-auto">
            <p className="section-tagline">Proyek Kami</p>
            <h2 className="section-title" id="projects-heading">
              Proyek <span className="text-accent">Unggulan</span>
            </h2>
          </div>
        </div>

        {/* Filter tabs */}
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

        {/* Project cards */}
        <div className="row g-4">
          {filtered.map((project, idx) => (
            <div
              className="col-md-6 col-lg-4"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="project-card">
                {/* Gambar proyek */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>

                <div className="project-info">
                  <h5>{project.title}</h5>
                  <div className="project-meta">
                    <span>
                      <i className="bi bi-geo-alt me-1"></i>
                      {project.location}
                    </span>
                    <span>
                      <i className="bi bi-calendar me-1"></i>
                      {project.year}
                    </span>
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
