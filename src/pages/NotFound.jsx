/* =============================================
 * NotFound — Bold 404 page
 * ============================================= */

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found-section text-center p-4" aria-labelledby="notfound-title">
      <div>
        <h1 className="not-found-number">404</h1>
        <h2 className="not-found-title" id="notfound-title">Halaman Tidak Ditemukan</h2>
        <p className="not-found-desc">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link to="/" className="btn btn-accent">
          <i className="bi bi-house"></i> Kembali ke Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
