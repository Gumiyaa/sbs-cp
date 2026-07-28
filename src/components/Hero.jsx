/* =============================================
 * Hero — Bold full-screen with animated elements
 * ============================================= */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>

      {/* Decorative floating shapes — pure decoration, hidden from AT */}
      <div className="hero-deco hero-deco-circle" style={{ top: '15%', left: '8%', width: 80, height: 80 }} aria-hidden="true" />
      <div className="hero-deco hero-deco-circle" style={{ bottom: '20%', right: '12%', width: 120, height: 120 }} aria-hidden="true" />
      <div className="hero-deco hero-deco-dot" style={{ top: '40%', right: '25%', width: 6, height: 6 }} aria-hidden="true" />
      <div className="hero-deco hero-deco-dot" style={{ top: '25%', left: '20%', width: 4, height: 4 }} aria-hidden="true" />
      <div className="hero-deco hero-deco-line" style={{ bottom: '30%', left: '15%', width: 100 }} aria-hidden="true" />

      <div className="container hero-content">
        <motion.div
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-lg-9 text-center text-white">
            <motion.p variants={itemVariants} className="hero-tagline">
              PT Subasumi Cipta Senawira
            </motion.p>

            <motion.h1 variants={itemVariants} className="hero-title">
              Membangun Masa Depan dengan{' '}
              <span className="highlight">Kualitas</span> dan{' '}
              <span className="highlight">Integritas</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Perusahaan kontraktor terpercaya yang bergerak di bidang
              konstruksi, pembangunan gedung, infrastruktur, renovasi, dan
              manajemen proyek dengan standar kualitas internasional.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <Link to="/layanan" className="btn btn-accent">
                Lihat Layanan
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/kontak" className="btn btn-outline-light">
                Hubungi Kami
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
