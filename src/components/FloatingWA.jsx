/* =============================================
 * FloatingWA — WhatsApp floating button
 * ============================================= */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWA = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="floating-wa-wrapper">
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="floating-wa-tooltip"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            Chat via WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        aria-label="Chat via WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg viewBox="0 0 32 32" fill="currentColor" width="28" height="28">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.058 9.374L1.054 31.25l6.114-1.978A15.91 15.91 0 0016.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.318 22.586c-.39 1.094-1.932 2.006-3.154 2.27-.834.18-1.924.322-5.598-1.202-4.704-1.95-7.726-6.724-7.96-7.036-.226-.312-1.864-2.486-1.864-4.742 0-2.256 1.184-3.364 1.606-3.828.39-.43 1.024-.57 1.364-.57.34 0 .676.003.97.017.312.014.73-.118 1.136.866.39.946 1.348 3.29 1.466 3.524.118.234.196.506.04.818-.156.314-.234.51-.468.784-.234.274-.492.612-.702.82-.234.234-.476.486-.204.956.274.47 1.214 2.004 2.606 3.246 1.788 1.598 3.294 2.094 3.764 2.326.47.234.744.196 1.018-.118.274-.314 1.168-1.364 1.482-1.834.312-.47.626-.39 1.056-.234.434.156 2.744 1.296 3.214 1.53.47.234.784.352.902.546.118.194.118 1.124-.272 2.218z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingWA;